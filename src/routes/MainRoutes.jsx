// src/routes/MainRoutes.jsx

import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';

// Project imports
import MainLayout from 'layout/MainLayout';
import AuthGuard from 'component/Auth/AuthGuard';
import Loadable from 'component/Loadable';

// Dashboard pages
const DashboardDefault = Loadable(lazy(() => import('views/Dashboard/Default')));

// Widget pages
const WidgetStatistic = Loadable(lazy(() => import('views/Widget/Statistic')));

// RTL layout
const RtlLayout = Loadable(lazy(() => import('views/RtlLayout')));

// User pages
const UserCard = Loadable(lazy(() => import('views/User/Card')));
const UserAccount = Loadable(lazy(() => import('views/User/Account')));
const UserList = Loadable(lazy(() => import('views/User/List')));
const UserProfile = Loadable(lazy(() => import('views/User/Profile')));
const UserSocialProfile = Loadable(lazy(() => import('views/User/Socialprofile')));

// Application pages
const EcommerceAccount = Loadable(lazy(() => import('views/Application/Ecommerce/Account')));
const EcommerceProduct = Loadable(lazy(() => import('views/Application/Ecommerce/Product')));
const EcommerceCustomerlist = Loadable(lazy(() => import('views/Application/Ecommerce/Customerlist')));
const EcommerceOrderlist = Loadable(lazy(() => import('views/Application/Ecommerce/Orderlist')));
const EcommerceOrderdetails = Loadable(lazy(() => import('views/Application/Ecommerce/Orderdetails')));
const EcommerceAddProduct = Loadable(lazy(() => import('views/Application/Ecommerce/Addproduct')));
const EcommerceProductReview = Loadable(lazy(() => import('views/Application/Ecommerce/Productreview')));

const ContactsList = Loadable(lazy(() => import('views/Application/Contacts/List')));
const ContactsCard = Loadable(lazy(() => import('views/Application/Contacts/Card')));

const Mail = Loadable(lazy(() => import('views/Application/Mail')));
const Chat = Loadable(lazy(() => import('views/Application/Chat')));

const FullCalendar = Loadable(lazy(() => import('views/Application/FullCalendar')));

const Price1 = Loadable(lazy(() => import('views/Application/Price/Price1')));
const Price2 = Loadable(lazy(() => import('views/Application/Price/Price2')));
const Price3 = Loadable(lazy(() => import('views/Application/Price/Price3')));

// Basic UI elements
const BasicUIAccordion = Loadable(lazy(() => import('views/Elements/Basic/UIAccordion')));
const BasicUIAvatar = Loadable(lazy(() => import('views/Elements/Basic/UIAvatar')));
const BasicUIBadges = Loadable(lazy(() => import('views/Elements/Basic/UIBadges')));
const BasicUIBreadcrumb = Loadable(lazy(() => import('views/Elements/Basic/UIBreadcrumb')));
const BasicUICards = Loadable(lazy(() => import('views/Elements/Basic/UICards')));
const BasicUIChip = Loadable(lazy(() => import('views/Elements/Basic/UIChip')));
const BasicUIList = Loadable(lazy(() => import('views/Elements/Basic/UIList')));
const BasicUITabs = Loadable(lazy(() => import('views/Elements/Basic/UITabs')));

// Advance UI elements
const AdvanceUIAlert = Loadable(lazy(() => import('views/Elements/Advance/UIAlert')));
const AdvanceUIDialog = Loadable(lazy(() => import('views/Elements/Advance/UIDialog')));
const AdvanceUIPagination = Loadable(lazy(() => import('views/Elements/Advance/UIPagination')));
const AdvanceUIProgress = Loadable(lazy(() => import('views/Elements/Advance/UIProgress')));
const AdvanceUIRating = Loadable(lazy(() => import('views/Elements/Advance/UIRating')));
const AdvanceUISnackbar = Loadable(lazy(() => import('views/Elements/Advance/UISnackbar')));
const AdvanceUISpeeddial = Loadable(lazy(() => import('views/Elements/Advance/UISpeeddial')));
const AdvanceUITimeline = Loadable(lazy(() => import('views/Elements/Advance/UITimeline')));
const AdvanceUIToggleButton = Loadable(lazy(() => import('views/Elements/Advance/UIToggleButton')));
const AdvanceUITreeview = Loadable(lazy(() => import('views/Elements/Advance/UITreeview')));

// Form elements
const FrmAutocomplete = Loadable(lazy(() => import('views/Forms/FrmAutocomplete')));
const FrmButton = Loadable(lazy(() => import('views/Forms/FrmButton')));
const FrmCheckbox = Loadable(lazy(() => import('views/Forms/FrmCheckbox')));
const FrmDatetime = Loadable(lazy(() => import('views/Forms/FrmDatetime')));
const FrmListbox = Loadable(lazy(() => import('views/Forms/FrmListbox')));
const FrmRadio = Loadable(lazy(() => import('views/Forms/FrmRadio')));
const FrmSelect = Loadable(lazy(() => import('views/Forms/FrmSelect')));
const FrmSlider = Loadable(lazy(() => import('views/Forms/FrmSlider')));
const FrmSwitch = Loadable(lazy(() => import('views/Forms/FrmSwitch')));
const FrmTextField = Loadable(lazy(() => import('views/Forms/FrmTextField')));

// Table components
const TableBasic = Loadable(lazy(() => import('views/Tables/TableBasic')));
const DenseTable = Loadable(lazy(() => import('views/Tables/DenseTable')));
const EnhancedTable = Loadable(lazy(() => import('views/Tables/EnhancedTable')));
const DataTable = Loadable(lazy(() => import('views/Tables/DataTable')));
const CustomizedTables = Loadable(lazy(() => import('views/Tables/CustomizedTables')));
const StickyHeadTable = Loadable(lazy(() => import('views/Tables/StickyHeadTable')));
const CollapsibleTable = Loadable(lazy(() => import('views/Tables/CollapsibleTable')));

// MUI Datatables
const MUITableSimple = Loadable(lazy(() => import('views/MUIDatatables/simple')));
const MUITableColumnFilters = Loadable(lazy(() => import('views/MUIDatatables/column-filters')));
const MUITableColumnOptionsUpdate = Loadable(lazy(() => import('views/MUIDatatables/column-options-update')));
const MUITableColumnSort = Loadable(lazy(() => import('views/MUIDatatables/column-sort')));
const MUITableColumnComponent = Loadable(lazy(() => import('views/MUIDatatables/component')));
const MUITableCSVExport = Loadable(lazy(() => import('views/MUIDatatables/csv-export')));
const MUITableCustomActionColumn = Loadable(lazy(() => import('views/MUIDatatables/custom-action-columns')));
const MUITableCustomComponents = Loadable(lazy(() => import('views/MUIDatatables/custom-components')));
const MUITableCustomizeColumns = Loadable(lazy(() => import('views/MUIDatatables/customize-columns')));
const MUITableCustomizeFilter = Loadable(lazy(() => import('views/MUIDatatables/customize-filter')));
const MUITableDraggableColumns = Loadable(lazy(() => import('views/MUIDatatables/draggable-columns')));
const MUITableExpandableRows = Loadable(lazy(() => import('views/MUIDatatables/expandable-rows')));
const MUITableFixedHeader = Loadable(lazy(() => import('views/MUIDatatables/fixed-header')));
const MUITableResizableColumns = Loadable(lazy(() => import('views/MUIDatatables/resizable-columns')));
const MUITableSelectableRows = Loadable(lazy(() => import('views/MUIDatatables/selectable-rows')));

// Utility pages
const UtilsModal = Loadable(lazy(() => import('views/Utils/Modal')));
const UtilsTooltip = Loadable(lazy(() => import('views/Utils/Tooltip')));
const UtilsPopover = Loadable(lazy(() => import('views/Utils/Popover')));
const UtilsPopper = Loadable(lazy(() => import('views/Utils/Popper')));
const UtilsTransitions = Loadable(lazy(() => import('views/Utils/Transitions')));
const UtilsTypography = Loadable(lazy(() => import('views/Utils/Typography')));

// Other pages
const SamplePage = Loadable(lazy(() => import('views/SamplePage')));
const MultiLanguage = Loadable(lazy(() => import('views/MultiLanguage')));

const PlatformMetrics = Loadable(lazy(() => import('views/PlatformMetrics')));
const GoogleAnalytics = Loadable(lazy(() => import('views/GoogleAnalytics')));

// ==============================|| MAIN ROUTES ||============================== //

const MainRoutes = {
  path: '/',
  element: (
    <AuthGuard>
      <MainLayout />
    </AuthGuard>
  ),
  children: [
    { path: '/', element: <Navigate to="/summary" replace /> },
    { path: '/dashboard/default', element: <DashboardDefault /> },
    { path: '/summary', element: <DashboardDefault /> },
    { path: '/platform-metrics', element: <PlatformMetrics /> },
    { path: '/google-analytics', element: <GoogleAnalytics /> },
    { path: '/widget/statistic', element: <WidgetStatistic /> },
    { path: '/rtl', element: <RtlLayout /> },
    { path: '/user/account', element: <UserAccount /> },
    { path: '/user/card', element: <UserCard /> },
    { path: '/user/list', element: <UserList /> },
    { path: '/user/profile', element: <UserProfile /> },
    { path: '/user/socialprofile', element: <UserSocialProfile /> },
    { path: '/application/ecommerce/account', element: <EcommerceAccount /> },
    { path: '/application/ecommerce/product', element: <EcommerceProduct /> },
    { path: '/application/ecommerce/customerlist', element: <EcommerceCustomerlist /> },
    { path: '/application/ecommerce/orderlist', element: <EcommerceOrderlist /> },
    { path: '/application/ecommerce/orderdetails', element: <EcommerceOrderdetails /> },
    { path: '/application/ecommerce/addproduct', element: <EcommerceAddProduct /> },
    { path: '/application/ecommerce/productreview', element: <EcommerceProductReview /> },
    { path: '/application/contacts/list', element: <ContactsList /> },
    { path: '/application/contacts/card', element: <ContactsCard /> },
    { path: '/application/mail', element: <Mail /> },
    { path: '/application/chat', element: <Chat /> },
    { path: '/application/full-calendar', element: <FullCalendar /> },
    { path: '/application/price/price1', element: <Price1 /> },
    { path: '/application/price/price2', element: <Price2 /> },
    { path: '/application/price/price3', element: <Price3 /> },
    { path: '/elements/basic/accordion', element: <BasicUIAccordion /> },
    { path: '/elements/basic/avatar', element: <BasicUIAvatar /> },
    { path: '/elements/basic/badges', element: <BasicUIBadges /> },
    { path: '/elements/basic/breadcrumb', element: <BasicUIBreadcrumb /> },
    { path: '/elements/basic/cards', element: <BasicUICards /> },
    { path: '/elements/basic/chip', element: <BasicUIChip /> },
    { path: '/elements/basic/list', element: <BasicUIList /> },
    { path: '/elements/basic/tabs', element: <BasicUITabs /> },
    { path: '/elements/advance/alert', element: <AdvanceUIAlert /> },
    { path: '/elements/advance/dialog', element: <AdvanceUIDialog /> },
    { path: '/elements/advance/pagination', element: <AdvanceUIPagination /> },
    { path: '/elements/advance/progress', element: <AdvanceUIProgress /> },
    { path: '/elements/advance/rating', element: <AdvanceUIRating /> },
    { path: '/elements/advance/snackbar', element: <AdvanceUISnackbar /> },
    { path: '/elements/advance/speeddial', element: <AdvanceUISpeeddial /> },
    { path: '/elements/advance/timeline', element: <AdvanceUITimeline /> },
    { path: '/elements/advance/togglebutton', element: <AdvanceUIToggleButton /> },
    { path: '/elements/advance/treeview', element: <AdvanceUITreeview /> },
    { path: '/forms/autocomplete', element: <FrmAutocomplete /> },
    { path: '/forms/button', element: <FrmButton /> },
    { path: '/forms/checkbox', element: <FrmCheckbox /> },
    { path: '/forms/datetime', element: <FrmDatetime /> },
    { path: '/forms/listbox', element: <FrmListbox /> },
    { path: '/forms/radio', element: <FrmRadio /> },
    { path: '/forms/select', element: <FrmSelect /> },
    { path: '/forms/slider', element: <FrmSlider /> },
    { path: '/forms/switch', element: <FrmSwitch /> },
    { path: '/forms/textfield', element: <FrmTextField /> },
    { path: '/tables/basic', element: <TableBasic /> },
    { path: '/tables/dense', element: <DenseTable /> },
    { path: '/tables/enhanced', element: <EnhancedTable /> },
    { path: '/tables/data', element: <DataTable /> },
    { path: '/tables/customized', element: <CustomizedTables /> },
    { path: '/tables/sticky-head', element: <StickyHeadTable /> },
    { path: '/tables/collapsible', element: <CollapsibleTable /> },
    { path: '/mui-datatables/simple', element: <MUITableSimple /> },
    { path: '/mui-datatables/column-filters', element: <MUITableColumnFilters /> },
    { path: '/mui-datatables/column-options-update', element: <MUITableColumnOptionsUpdate /> },
    { path: '/mui-datatables/column-sort', element: <MUITableColumnSort /> },
    { path: '/mui-datatables/component', element: <MUITableColumnComponent /> },
    { path: '/mui-datatables/csv-export', element: <MUITableCSVExport /> },
    { path: '/mui-datatables/custom-action-columns', element: <MUITableCustomActionColumn /> },
    { path: '/mui-datatables/custom-components', element: <MUITableCustomComponents /> },
    { path: '/mui-datatables/customize-columns', element: <MUITableCustomizeColumns /> },
    { path: '/mui-datatables/customize-filter', element: <MUITableCustomizeFilter /> },
    { path: '/mui-datatables/draggable-columns', element: <MUITableDraggableColumns /> },
    { path: '/mui-datatables/expandable-rows', element: <MUITableExpandableRows /> },
    { path: '/mui-datatables/fixed-header', element: <MUITableFixedHeader /> },
    { path: '/mui-datatables/resizable-columns', element: <MUITableResizableColumns /> },
    { path: '/mui-datatables/selectable-rows', element: <MUITableSelectableRows /> },
    { path: '/utils/modal', element: <UtilsModal /> },
    { path: '/utils/tooltip', element: <UtilsTooltip /> },
    { path: '/utils/popover', element: <UtilsPopover /> },
    { path: '/utils/popper', element: <UtilsPopper /> },
    { path: '/utils/transitions', element: <UtilsTransitions /> },
    { path: '/utils/typography', element: <UtilsTypography /> },
    { path: '/sample-page', element: <SamplePage /> },
    { path: '/multi-language', element: <MultiLanguage /> }
  ]
};

export default MainRoutes;