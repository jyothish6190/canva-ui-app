import Editor from 'assets/containers/list/editor-page.svg';
import EditorLoFi from 'assets/containers/list/editor-page-lo-fi.svg';
import EditorObjectPanel from 'assets/containers/list/editor-page-with-object-panel.svg';
import EditorObjectPanelLoFi from 'assets/containers/list/editor-page-with-object-panel-lo-fi.svg';
import EditorPageEditPanel from 'assets/containers/list/editor-page-edit-panel.svg';
import EditorPageEditPanelLoFi from 'assets/containers/list/editor-page-edit-panel-lo-fi.svg';
import EditorPageEditPanelBlank from 'assets/containers/list/editor-page-edit-panel-blank.svg';
import HomePage from 'assets/containers/list/home.svg';
import HomeBlankPage from 'assets/containers/list/home-blank.svg';
import HomeLoFi from 'assets/containers/list/home-lo-fi.svg';
import HomeLoFiBlank from 'assets/containers/list/home-lo-fi-blank.svg';
import Projects from 'assets/containers/list/projects.svg';
import ProjectsLoFi from 'assets/containers/list/projects-lo-fi.svg';
import ObjectPanel from 'assets/containers/list/object-panel.svg';
import ObjectPanelLoFi from 'assets/containers/list/object-panel-lo-fi.svg';
import ObjectPanelMobile from 'assets/containers/list/object-panel-mobile.svg';
import ObjectPanelMobileLoFi from 'assets/containers/list/object-panel-mobile-lo-fi.svg';
import ShareMenu from 'assets/containers/list/share-menu.svg';
import ShareMenuLoFi from 'assets/containers/list/share-menu-lo-fi.svg';
import ShareMenuBlank from 'assets/containers/list/share-menu-blank.svg';
import EditPanel from 'assets/containers/list/edit-panel.svg';
import EditPanelLoFi from 'assets/containers/list/edit-panel-lo-fi.svg';
import EditPanelBlank from 'assets/containers/list/edit-panel-blank.svg';
import EditHeaderLoFi from 'assets/containers/list/edit-header-lo-fi.svg';
import EditHeader from 'assets/containers/list/edit-header.svg';
import ObjectPanelTab from 'assets/containers/list/object-panel-tab.svg';
import ObjectPanelTabLoFi from 'assets/containers/list/object-panel-tab-lo-fi.svg';
import Toolbar from 'assets/containers/list/toolbar.svg';
import ToolbarLoFi from 'assets/containers/list/toolbar-lo-fi.svg';
import Canvas from 'assets/containers/list/canvas.svg';
import CanvasLoFi from 'assets/containers/list/canvas-lo-fi.svg';
import SelectionHandles from 'assets/containers/list/selection-handles.svg';

import EditorMain from 'assets/containers/main/editor-page.svg';
import EditorLoFiMain from 'assets/containers/main/editor-page-lo-fi.svg';
import EditorObjectPanelMain from 'assets/containers/main/editor-page-with-object-panel.svg';
import EditorObjectPanelLoFiMain from 'assets/containers/main/editor-page-with-object-panel-lo-fi.svg';
import EditorPageEditPanelMain from 'assets/containers/main/editor-page-edit-panel.svg';
import EditorPageEditPanelLoFiMain from 'assets/containers/main/editor-page-edit-panel-lo-fi.svg';
import EditorPageEditPanelBlankMain from 'assets/containers/main/editor-page-edit-panel-blank.svg';
import HomePageMain from 'assets/containers/main/home.svg';
import HomeBlankPageMain from 'assets/containers/main/home-blank.svg';
import HomeLoFiMain from 'assets/containers/main/home-lo-fi.svg';
import HomeLoFiBlankMain from 'assets/containers/main/home-lo-fi-blank.svg';
import ProjectsMain from 'assets/containers/main/projects.svg';
import ProjectsLoFiMain from 'assets/containers/main/projects-lo-fi.svg';
import ObjectPanelMain from 'assets/containers/main/object-panel.svg';
import ObjectPanelLoFiMain from 'assets/containers/main/object-panel-lo-fi.svg';
import ObjectPanelMobileMain from 'assets/containers/main/object-panel-mobile.svg';
import ObjectPanelMobileLoFiMain from 'assets/containers/main/object-panel-mobile-lo-fi.svg';
import ShareMenuMain from 'assets/containers/main/share-menu.svg';
import ShareMenuLoFiMain from 'assets/containers/main/share-menu-lo-fi.svg';
import ShareMenuBlankMain from 'assets/containers/main/share-menu-blank.svg';
import EditPanelMain from 'assets/containers/main/edit-panel.svg';
import EditPanelLoFiMain from 'assets/containers/main/edit-panel-lo-fi.svg';
import EditPanelBlankMain from 'assets/containers/main/edit-panel-blank.svg';
import EditHeaderLoFiMain from 'assets/containers/main/edit-header-lo-fi.svg';
import EditHeaderMain from 'assets/containers/main/edit-header.svg';
import ObjectPanelTabMain from 'assets/containers/main/object-panel-tab.svg';
import ObjectPanelTabLoFiMain from 'assets/containers/main/object-panel-tab-lo-fi.svg';
import ToolbarMain from 'assets/containers/main/toolbar.svg';
import ToolbarLoFiMain from 'assets/containers/main/toolbar-lo-fi.svg';
import CanvasMain from 'assets/containers/main/canvas.svg';
import CanvasLoFiMain from 'assets/containers/main/canvas-lo-fi.svg';
import SelectionHandlesMain from 'assets/containers/main/selection-handles.svg';

import { Container } from 'src/models/containers.model';

export const containers: Container[] = [
    {
        list: Editor,
        main: EditorMain,
        label: 'Editor page',
        value: 'editor-page',
        width: 'full',
        align: 'left',
        SVGheight: 200,
    },
    {
        list: EditorLoFi,
        main: EditorLoFiMain,
        label: 'Editor page (Lo-fi)',
        value: 'editor-page-lo-fi',
        width: 'full',
        align: 'left',
        SVGheight: 200,
    },
    {
        list: EditorObjectPanel,
        main: EditorObjectPanelMain,
        label: 'Editor page with object panel',
        value: 'editor-page-with-object-panel',
        width: 'full',
        align: 'left',
        SVGheight: 200,
    },
    {
        list: EditorObjectPanelLoFi,
        main: EditorObjectPanelLoFiMain,
        label: 'Editor page with object panel (Lo-fi)',
        value: 'editor-page-with-object-panel-lo-fi',
        width: 'full',
        align: 'left',
        SVGheight: 200,
    },
    {
        list: EditorPageEditPanel,
        main: EditorPageEditPanelMain,
        label: 'Editor page with edit panel',
        value: 'editor-page-edit-panel',
        width: 'full',
        align: 'right',
        SVGheight: 200,
    },
    {
        list: EditorPageEditPanelLoFi,
        main: EditorPageEditPanelLoFiMain,
        label: 'Editor page with edit panel (Lo-fi)',
        value: 'editor-page-edit-panel-lo-fi',
        width: 'full',
        align: 'right',
        SVGheight: 200,
    },
    {
        list: EditorPageEditPanelBlank,
        main: EditorPageEditPanelBlankMain,
        label: 'Editor page with edit panel (Blank)',
        value: 'editor-page-edit-panel-blank',
        width: 'full',
        align: 'right',
        SVGheight: 200,
    },
    {
        list: HomePage,
        main: HomePageMain,
        label: 'Home page',
        value: 'home',
        width: 'full',
        align: 'left',
        SVGheight: 200,
    },
    {
        list: HomeBlankPage,
        main: HomeBlankPageMain,
        label: 'Home page (Blank)',
        value: 'home-blank',
        width: 'full',
        align: 'left',
        SVGheight: 200,
    },
    {
        list: HomeLoFi,
        main: HomeLoFiMain,
        label: 'Home page (Lo-fi)',
        value: 'home-lo-fi',
        width: 'full',
        align: 'left',
        SVGheight: 200,
    },
    {
        list: HomeLoFiBlank,
        main: HomeLoFiBlankMain,
        label: 'Home page (Lo-fi, Blank)',
        value: 'home-lo-fi-blank',
        width: 'full',
        align: 'left',
        SVGheight: 200,
    },
    {
        list: Projects,
        main: ProjectsMain,
        label: 'Projects',
        value: 'projects',
        width: 'full',
        align: 'left',
        SVGheight: 200,
    },
    {
        list: ProjectsLoFi,
        main: ProjectsLoFiMain,
        label: 'Projects (Lo-fi)',
        value: 'projects-lo-fi',
        width: 'full',
        align: 'left',
        SVGheight: 200,
    },
    {
        list: ObjectPanel,
        main: ObjectPanelMain,
        label: 'Object panel surface',
        value: 'object-panel',
        width: 'half',
        align: 'left',
        SVGheight: 400,
    },
    {
        list: ObjectPanelLoFi,
        main: ObjectPanelLoFiMain,
        label: 'Object panel surface (Lo-fi)',
        value: 'object-panel-lo-fi',
        width: 'half',
        align: 'left',
        SVGheight: 400,
    },
    {
        list: ObjectPanelMobile,
        main: ObjectPanelMobileMain,
        label: 'Object panel (Mobile)',
        value: 'object-panel-mobile',
        width: 'half',
        align: 'bottom-left',
        SVGheight: 400,
    },
    {
        list: ObjectPanelMobileLoFi,
        main: ObjectPanelMobileLoFiMain,
        label: 'Object panel (Mobile Lo-fi)',
        value: 'object-panel-mobile-lo-fi',
        width: 'half',
        align: 'bottom-left',
        SVGheight: 400,
    },
    {
        list: ShareMenu,
        main: ShareMenuMain,
        label: 'Share menu',
        value: 'share-menu',
        width: 'half',
        align: 'left',
        SVGheight: 400,
    },
    {
        list: ShareMenuLoFi,
        main: ShareMenuLoFiMain,
        label: 'Share menu (Lo-fi)',
        value: 'share-menu-lo-fi',
        width: 'half',
        align: 'left',
        SVGheight: 400,
    },
    {
        list: ShareMenuBlank,
        main: ShareMenuBlankMain,
        label: 'Share menu (Blank)',
        value: 'share-menu-blank',
        width: 'half',
        align: 'left',
        SVGheight: 400,
    },
    {
        list: EditPanel,
        main: EditPanelMain,
        label: 'Edit panel',
        value: 'edit-panel',
        width: 'half',
        align: 'left',
        SVGheight: 400,
    },
    {
        list: EditPanelLoFi,
        main: EditPanelLoFiMain,
        label: 'Edit panel (Lo-fi)',
        value: 'edit-panel-lo-fi',
        width: 'half',
        align: 'left',
        SVGheight: 400,
    },
    {
        list: EditPanelBlank,
        main: EditPanelBlankMain,
        label: 'Edit panel (Blank)',
        value: 'edit-panel-blank',
        width: 'half',
        align: 'left',
        SVGheight: 400,
    },
    {
        list: EditHeader,
        main: EditHeaderMain,
        label: 'Editor header',
        value: 'edit-header',
        width: 'half',
        align: 'left',
        SVGheight: 40,
    },
    {
        list: EditHeaderLoFi,
        main: EditHeaderLoFiMain,
        label: 'Editor header (Lo-fi)',
        value: 'edit-header-lo-fi',
        width: 'half',
        align: 'left',
        SVGheight: 40,
    },
    {
        list: ObjectPanelTab,
        main: ObjectPanelTabMain,
        label: 'Object panel tabs',
        value: 'object-panel-tab',
        width: 'half',
        align: 'center',
        SVGheight: 400,
    },
    {
        list: ObjectPanelTabLoFi,
        main: ObjectPanelTabLoFiMain,
        label: 'Object panel tabs (Lo-fi)',
        value: 'object-panel-tab-lo-fi',
        width: 'half',
        align: 'center',
        SVGheight: 400,
    },
    {
        list: Toolbar,
        main: ToolbarMain,
        label: 'Toolbar',
        value: 'toolbar',
        width: 'half',
        align: 'left',
        SVGheight: 40,
    },
    {
        list: ToolbarLoFi,
        main: ToolbarLoFiMain,
        label: 'Toolbar (Lo-fi)',
        value: 'toolbar-lo-fi',
        width: 'half',
        align: 'left',
        SVGheight: 40,
    },
    {
        list: Canvas,
        main: CanvasMain,
        label: 'Canvas',
        value: 'canvas',
        width: 'half',
        align: 'left',
        SVGheight: 200,
    },
    {
        list: CanvasLoFi,
        main: CanvasLoFiMain,
        label: 'Canvas (Lo-fi)',
        value: 'canvas-lo-fi',
        width: 'half',
        align: 'left',
        SVGheight: 200,
    },
    {
        list: SelectionHandles,
        main: SelectionHandlesMain,
        label: 'Selection handles',
        value: 'selection-handles',
        width: 'half',
        align: 'center',
        SVGheight: 200,
    },
];
