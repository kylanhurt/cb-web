import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Lightbox from 'react-images';

export default class Gallery extends PureComponent {
  static propTypes = {
    images: PropTypes.array,
    tags: PropTypes.array,
  };
  
  constructor(props) {
    super(props);
    this.state = {
      images: this.props.images,
      currentTag: 'all',
      tags: this.props.tags,
      lightboxIsOpen: false,
      currentImage: 0
    };
    
    this.onFilter = this.onFilter.bind(this);
    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.gotoImage = this.gotoImage.bind(this);
    this.handleClickImage = this.handleClickImage.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
  }
  
  onFilter(tag, e) {
    e.preventDefault();
    if (tag === 'all') {
      const imgs = this.props.images;
      this.setState({
        images: imgs,
        currentTag: 'all'
      })
    }
    else {
      const imgs = this.props.images.filter((t) => t.type === tag);
      this.setState({
        images: imgs,
        currentTag: tag
      })
    }
  }
  
  openLightbox(index, event) {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    });
  }
  
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  
  gotoImage(index) {
    this.setState({
      currentImage: index,
    });
  }
  
  handleClickImage() {
    if (this.state.currentImage === this.props.images.length - 1) return;
    this.gotoNext();
  }
  
  render() {
    return (
      <div className='gallery'>
        <div className='gallery__btns'>
          <button
            className={`gallery__btn${this.state.currentTag === 'all' ? ' gallery__btn--active' : ''}`}
            onClick={(e) => this.onFilter('all', e)}>all
          </button>
          {this.state.tags.map((btn, i) =>
            <button key={i}
                    className={`gallery__btn${btn.tag === this.state.currentTag ? ' gallery__btn--active' : ''}`}
                    onClick={(e) => this.onFilter(btn.tag, e)}>{btn.title}</button>
          )}
        </div>
        {this.state.images.map((img, i) =>
          <a className='gallery__img-wrap' key={i} onClick={(e) => this.openLightbox(i, e)} href={img.src}>
            <img src={img.src} alt={img.alt}/>
          </a>
        )}
        <Lightbox
          currentImage={this.state.currentImage}
          images={this.state.images}
          isOpen={this.state.lightboxIsOpen}
          onClickImage={this.handleClickImage}
          onClickNext={this.gotoNext}
          onClickPrev={this.gotoPrevious}
          onClickThumbnail={this.gotoImage}
          onClose={this.closeLightbox}
        />
      </div>
    )
  }
}