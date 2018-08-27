import React from 'react';
import {Route, Switch} from 'react-router-dom';
import MainWrapper from './MainWrapper';
import Layout from '../containers/_layout/Layout';

import Alerts from '../containers/ui/alerts/Alerts';
import Buttons from '../containers/ui/buttons/Buttons';
import Carousel from '../containers/ui/carousel/Carousel';
import Collapse from '../containers/ui/collapse/Collapse';
import Grids from '../containers/ui/Grids';
import Modals from '../containers/ui/modals/Modals';
import Notifications from '../containers/ui/notification/Notifications';
import Panels from '../containers/ui/panels/Panels';
import ProgressBars from '../containers/ui/progress_bars/ProgressBars';
import RangeSliders from '../containers/ui/range_sliders/RangeSliders';
import Tabs from '../containers/ui/tabs/Tabs';
import Timeline from '../containers/ui/timeline/Timeline';
import Tooltips from '../containers/ui/tooltips/TooltipsPopovers';
import Typography from '../containers/ui/typography/Typography';

import BasicTables from '../containers/tables/basic_tables/BasicTables';
import DataTable from '../containers/tables/data_table/DataTable';
import EditableTable from '../containers/tables/editable_table/EditableTable';

import GoogleMap from '../containers/maps/google_map/GoogleMap';
import VectorMap from '../containers/maps/vector_map/VectorMap';

import NotFound404 from '../containers/default_page/404/404';
import Calendar from '../containers/default_page/calendar/Calendar';
import FAQ from '../containers/default_page/faq/FAQ';
import Gallery from '../containers/default_page/gallery/Gallery';
import Chat from '../containers/chat/Chat';
import PricingCards from '../containers/default_page/pricing_cards/PricingCards';
import TextEditor from '../containers/default_page/text_editor/TextEditor';
import InvoiceTemplate from '../containers/default_page/invoice_template/InvoiceTemplate';
import SearchResults from '../containers/default_page/search_results/SearchResults';
import ProjectSummary from '../containers/default_page/project-summary/ProjectSummary';

import Catalog from '../containers/e-commerce/catalog/Catalog';
import ProductPage from '../containers/e-commerce/product_page/ProductPage';

import Profile from '../containers/account/profile/Profile';
import EmailConfirmation from '../containers/account/email_confimation/EmailConfirmation';
import LockScreen from '../containers/account/lock_screen/LockScreen';
import LogIn from '../containers/account/log_in/LogIn';
import LogInPhoto from '../containers/account/log_in_photo/LogInPhoto';
import Register from '../containers/account/register/Register';
import RegisterPhoto from '../containers/account/register_photo/RegisterPhoto';

import BasicForm from '../containers/form/basic_form/BasicForm';
import FormDropzone from '../containers/form/form_dropzone/FormDropzone';
import FileUpload from '../containers/form/file_upload/FileUpload';
import FormLayouts from '../containers/form/form_layouts/FormLayouts';
import CheckFormControls from '../containers/form/check_form_controls/CheckFormControls';
import FormValidation from '../containers/form/form_validation/FormValidation';
import MaskForm from '../containers/form/mask_form/MaskForm';
import WizardForm from '../containers/form/wizard_form/WizardForm';
import MaterialForm from '../containers/form/material_form/MaterialForm';
import FloatingLabelsForm from '../containers/form/floating_labels_form/FloatingLabelsForm';
import FormPicker from '../containers/form/form_picker/FormPicker';

import Cart from '../containers/e-commerce/cart/Cart';
import OrdersList from '../containers/e-commerce/orders_list/OrdersList';
import Payment from '../containers/e-commerce/payment/Payment';
import ProductEdit from '../containers/e-commerce/product_edit/ProductEdit';
import ProductsList from '../containers/e-commerce/products_list/ProductsList';

import ChartsJS from '../containers/charts/chart_js/ChartsJS';
import ReactVis from '../containers/charts/react-vis/ReactVis';
import Recharts from '../containers/charts/recharts/Recharts';

import FitnessDashboard from '../containers/dashboards/fitness/FitnessDashboard';
import DefaultDashboard from '../containers/dashboards/default/DefaultDashboard';
import ECommerceDashboard from '../containers/dashboards/e-commerce/ECommerceDashboard';
import CryptoDashboard from '../containers/dashboards/crypto/CryptoDashboard';

import Mail from '../containers/mail/Mail';

import Introduction from '../containers/documentation/01_introduction/Introduction';
import Installation from '../containers/documentation/02_installation/Installation';
import FileStructure from '../containers/documentation/03_files_structure/FileStructure';
import Components from '../containers/documentation/04_components/Components';
import Form from '../containers/documentation/05_forms/Form';
import ColorThemes from '../containers/documentation/06_change_and_add_color_themes/ColorThemes';
import NavigationItem from '../containers/documentation/07_new_navigation_item/NavigationItem';
import Resources from '../containers/documentation/08_resources/Resources';
import Changelog from '../containers/documentation/09_changelog/Changelog';


import CryptoDashboardEdit from '../containers/dashboards/crypto_table_edit/CryptoDashboardEdit';
import ECommerceDashboardEdit from '../containers/dashboards/e-commerce_table_edit/ECommerceDashboardEdit';

import Landing from '../containers/landing/Landing';

const Router = () => (
  <MainWrapper>
    <main>
      <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/404' component={NotFound404}/>
        <Route path='/lock_screen' component={LockScreen}/>
        <Route path='/log_in' component={LogIn}/>
        <Route path='/log_in_photo' component={LogInPhoto}/>
        <Route path='/register' component={Register}/>
        <Route path='/register_photo' component={RegisterPhoto}/>
        <Route path='/' component={wrappedRoutes}/>
      </Switch>
    </main>
  </MainWrapper>
);

const wrappedRoutes = () => (
  <div>
    <Layout/>
    <div className='container__wrap'>
      <Route path='/dashboard_default' component={DefaultDashboard}/>
      <Route path='/dashboard_e_commerce' component={Commerce}/>
      <Route path='/dashboard_fitness' component={FitnessDashboard}/>
      <Route path='/dashboard_crypto' component={Crypto}/>
      <Route path='/ui' component={UI}/>
      <Route path='/mail' component={Mail}/>
      <Route path='/chat' component={Chat}/>
      <Route path='/forms' component={Forms}/>
      <Route path='/tables' component={Tables}/>
      <Route path='/charts' component={Charts}/>
      <Route path='/maps' component={Maps}/>
      <Route path='/account' component={Account}/>
      <Route path='/e-commerce' component={ECommerce}/>
      <Route path='/default_pages' component={DefaultPages}/>
      <Route path='/documentation' component={Documentation}/>
    </div>
  </div>
);

const UI = () => (
  <Switch>
    <Route path='/ui/alerts' component={Alerts}/>
    <Route path='/ui/buttons' component={Buttons}/>
    <Route path='/ui/carousel' component={Carousel}/>
    <Route path='/ui/collapse' component={Collapse}/>
    <Route path='/ui/grids' component={Grids}/>
    <Route path='/ui/modals' component={Modals}/>
    <Route path='/ui/notifications' component={Notifications}/>
    <Route path='/ui/panels' component={Panels}/>
    <Route path='/ui/progress_bars' component={ProgressBars}/>
    <Route path='/ui/range_sliders' component={RangeSliders}/>
    <Route path='/ui/tabs' component={Tabs}/>
    <Route path='/ui/timeline' component={Timeline}/>
    <Route path='/ui/tooltips' component={Tooltips}/>
    <Route path='/ui/typography' component={Typography}/>
  </Switch>
);

const Forms = () => (
  <Switch>
    <Route path='/forms/basic_form' component={BasicForm}/>
    <Route path='/forms/check_form_controls' component={CheckFormControls}/>
    <Route path='/forms/file_upload' component={FileUpload}/>
    <Route path='/forms/floating_labels_form' component={FloatingLabelsForm}/>
    <Route path='/forms/form_dropzone' component={FormDropzone}/>
    <Route path='/forms/form_layouts' component={FormLayouts}/>
    <Route path='/forms/form_picker' component={FormPicker}/>
    <Route path='/forms/form_validation' component={FormValidation}/>
    <Route path='/forms/mask_form' component={MaskForm}/>
    <Route path='/forms/material_form' component={MaterialForm}/>
    <Route path='/forms/wizard_form' component={WizardForm}/>
  </Switch>
);

const Tables = () => (
  <Switch>
    <Route path='/tables/basic_tables' component={BasicTables}/>
    <Route path='/tables/data_table' component={DataTable}/>
    <Route path='/tables/editable_table' component={EditableTable}/>
  </Switch>
);

const Charts = () => (
  <Switch>
    <Route path='/charts/charts_js' component={ChartsJS}/>
    <Route path='/charts/react_vis' component={ReactVis}/>
    <Route path='/charts/recharts' component={Recharts}/>
  </Switch>
);

const Maps = () => (
  <Switch>
    <Route path='/maps/google_map' component={GoogleMap}/>
    <Route path='/maps/vector_map' component={VectorMap}/>
  </Switch>
);

const Account = () => (
  <Switch>
    <Route path='/account/profile' component={Profile}/>
    <Route path='/account/email_confirmation' component={EmailConfirmation}/>
  </Switch>
);

const ECommerce = () => (
  <Switch>
    <Route path='/e-commerce/cart' component={Cart}/>
    <Route path='/e-commerce/catalog' component={Catalog}/>
    <Route path='/e-commerce/orders_list' component={OrdersList}/>
    <Route path='/e-commerce/payment' component={Payment}/>
    <Route path='/e-commerce/product_edit' component={ProductEdit}/>
    <Route path='/e-commerce/product_page' component={ProductPage}/>
    <Route path='/e-commerce/products_list' component={ProductsList}/>
  </Switch>
);

const DefaultPages = () => (
  <Switch>
    <Route path='/default_pages/calendar' component={Calendar}/>
    <Route path='/default_pages/faq' component={FAQ}/>
    <Route path='/default_pages/gallery' component={Gallery}/>
    <Route path='/default_pages/invoice_template' component={InvoiceTemplate}/>
    <Route path='/default_pages/pricing_cards' component={PricingCards}/>
    <Route path='/default_pages/project_summary' component={ProjectSummary}/>
    <Route path='/default_pages/search_results' component={SearchResults}/>
    <Route path='/default_pages/text_editor' component={TextEditor}/>
  </Switch>
);

const Documentation = () => (
  <Switch>
    <Route path='/documentation/introduction' component={Introduction}/>
    <Route path='/documentation/installation' component={Installation}/>
    <Route path='/documentation/file_structure' component={FileStructure}/>
    <Route path='/documentation/components' component={Components}/>
    <Route path='/documentation/form' component={Form}/>
    <Route path='/documentation/color_themes' component={ColorThemes}/>
    <Route path='/documentation/navigation_item' component={NavigationItem}/>
    <Route path='/documentation/resources' component={Resources}/>
    <Route path='/documentation/changelog' component={Changelog}/>
  </Switch>
);

const Crypto = () => (
  <Switch>
    <Route exact path='/dashboard_crypto' component={CryptoDashboard}/>
    <Route path='/dashboard_crypto/edit/:index' component={CryptoDashboardEdit}/>
  </Switch>
);

const Commerce = () => (
  <Switch>
    <Route exact path='/dashboard_e_commerce' component={ECommerceDashboard}/>
    <Route path='/dashboard_e_commerce/edit/:index' component={ECommerceDashboardEdit}/>
  </Switch>
);

export default Router;
