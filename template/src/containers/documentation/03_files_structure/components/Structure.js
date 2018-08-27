import React, {PureComponent} from 'react';
import {Card, CardBody} from 'reactstrap';

export default class Structure extends PureComponent {
  render() {
    return (
      <Card className='card--not-full-height'>
        <CardBody>
          <div className='card__title'>
            <h5 className='bold-text'>File Structure</h5>
          </div>
          <p>EasyDEV has two projects:</p>
          <p><b>/template/...</b> - contains all components and pages which you can to find
            <a href='http://previews.aspirity.com/easydev/' target='_blank' rel='noopener noreferrer'> here</a>:</p>
          <pre className='documentation__structure'>
            <code>
{`easydev/
|——template
|  |——config/
|  |——public/
|  |  |——img/
|  |  |——fav.ico
|  |  |——index.html
|  |——src/
|  |  |——app/                   --App.js, Router.js
|  |  |——components/
|  |  |——imgs/
|  |  |——containers/
|  |  |    |——_layout/          --topbar, sidebar
|  |  |    |——account/          --lock screens, log in, register, profile
|  |  |    |——charts/           --pages with different charts
|  |  |    |——dashboards/       --default, e-commerce, fitness
|  |  |    |——default_pages/    --calendar, gallery, chat, etc.
|  |  |    |——documentation/    --documentation of the template
|  |  |    |——e-commerce/       --cart, catalog, product page, etc.
|  |  |    |——form/             --redux-form, materiual-ui-next
|  |  |    |——mail/             --inbox page
|  |  |    |——maps/             --google map, highmap
|  |  |    |——tables/           --bootstrap tables, data tables
|  |  |    |——ui/               --ui elements
|  |  |——redux/
|  |  |    |——actions/
|  |  |    |——reducers/
|  |  |——scss/                   --styles
|  |  |——index.js
|  |——package.json
|  |——package-lock.json
`}
            </code>
          </pre>
          <p><b>/seed/...</b> - contains main components and examples of pages:</p>
          <pre className='documentation__structure'>
            <code>
{`easydev/
|——seed
|  |——config/
|  |——public/
|  |  |——img/
|  |  |——fav.ico
|  |  |——index.html
|  |——src/
|  |  |——app/                   --App.js, Router.js
|  |  |——components/
|  |  |——img/
|  |  |——pages/
|  |  |    |——_layout/          --topbar, sidebar
|  |  |    |——example/          --example of page
|  |  |    |——example_two/      --example of page
|  |  |    |——ui/               --example of log in page
|  |  |——redux/
|  |  |    |——actions/
|  |  |    |——reducers/
|  |  |——scss/                   --styles
|  |  |——index.js
|  |——package.json
|  |——package-lock.json
`}
            </code>
          </pre>
        </CardBody>
      </Card>
    )
  }
}
