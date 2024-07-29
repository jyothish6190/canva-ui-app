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

import { Container } from 'src/models/containers.model';

export const containers: Container[] = [
    {
        list: Editor,
        main: 'editor-page.svg',
        label: 'Editor page',
        value: 'editor-page',
        width: 'full',
        align: 'left',
    },
    {
        list: EditorLoFi,
        main: 'editor-page-lo-fi.svg',
        label: 'Editor page (Lo-fi)',
        value: 'editor-page-lo-fi',
        width: 'full',
        align: 'left',
    },
    {
        list: EditorObjectPanel,
        main: 'editor-page-with-object-panel.svg',
        label: 'Editor page with object panel',
        value: 'editor-page-with-object-panel',
        width: 'full',
        align: 'left',
    },
    {
        list: EditorObjectPanelLoFi,
        main: 'editor-page-with-object-panel-lo-fi.svg',
        label: 'Editor page with object panel (Lo-fi)',
        value: 'editor-page-with-object-panel-lo-fi',
        width: 'full',
        align: 'left',
    },
    {
        list: EditorPageEditPanel,
        main: 'editor-page-edit-panel.svg',
        label: 'Editor page with edit panel',
        value: 'editor-page-edit-panel',
        width: 'full',
        align: 'right',
    },
    {
        list: EditorPageEditPanelLoFi,
        main: 'editor-page-edit-panel-lo-fi.svg',
        label: 'Editor page with edit panel (Lo-fi)',
        value: 'editor-page-edit-panel-lo-fi',
        width: 'full',
        align: 'right',
    },
    {
        list: EditorPageEditPanelBlank,
        main: 'editor-page-edit-panel-blank.svg',
        label: 'Editor page with edit panel (Blank)',
        value: 'editor-page-edit-panel-blank',
        width: 'full',
        align: 'right',
    },
    {
        list: HomePage,
        main: 'home.svg',
        label: 'Home page',
        value: 'home',
        width: 'full',
        align: 'left',
    },
    {
        list: HomeBlankPage,
        main: 'home-blank.svg',
        label: 'Home page (Blank)',
        value: 'home-blank',
        width: 'full',
        align: 'left',
    },
    {
        list: HomeLoFi,
        main: 'home-lo-fi.svg',
        label: 'Home page (Lo-fi)',
        value: 'home-lo-fi',
        width: 'full',
        align: 'left',
    },
    {
        list: HomeLoFiBlank,
        main: 'home-lo-fi-blank.svg',
        label: 'Home page (Lo-fi, Blank)',
        value: 'home-lo-fi-blank',
        width: 'full',
        align: 'left',
    },
    {
        list: Projects,
        main: 'projects.svg',
        label: 'Projects',
        value: 'projects',
        width: 'full',
        align: 'left',
    },
    {
        list: ProjectsLoFi,
        main: 'projects-lo-fi.svg',
        label: 'Projects (Lo-fi)',
        value: 'projects-lo-fi',
        width: 'full',
        align: 'left',
    },
    {
        list: ObjectPanel,
        main: 'object-panel.svg',
        label: 'Object panel surface',
        value: 'object-panel',
        width: 'half',
        align: 'left',
    },
    {
        list: ObjectPanelLoFi,
        main: 'object-panel-lo-fi.svg',
        label: 'Object panel surface (Lo-fi)',
        value: 'object-panel-lo-fi',
        width: 'half',
        align: 'left',
    },
    {
        list: ObjectPanelMobile,
        main: 'object-panel-mobile.svg',
        label: 'Object panel (Mobile)',
        value: 'object-panel-mobile',
        width: 'half',
        align: 'bottom-left',
    },
    {
        list: ObjectPanelMobileLoFi,
        main: 'object-panel-mobile-lo-fi.svg',
        label: 'Object panel (Mobile Lo-fi)',
        value: 'object-panel-mobile-lo-fi',
        width: 'half',
        align: 'bottom-left',
    },
    {
        list: ShareMenu,
        main: 'share-menu.svg',
        label: 'Share menu',
        value: 'share-menu',
        width: 'half',
        align: 'left',
    },
    {
        list: ShareMenuLoFi,
        main: 'share-menu-lo-fi.svg',
        label: 'Share menu (Lo-fi)',
        value: 'share-menu-lo-fi',
        width: 'half',
        align: 'left',
    },
    {
        list: ShareMenuBlank,
        main: 'share-menu-blank.svg',
        label: 'Share menu (Blank)',
        value: 'share-menu-blank',
        width: 'half',
        align: 'left',
    },
    {
        list: EditPanel,
        main: 'edit-panel.svg',
        label: 'Edit panel',
        value: 'edit-panel',
        width: 'half',
        align: 'left',
    },
    {
        list: EditPanelLoFi,
        main: 'edit-panel-lo-fi.svg',
        label: 'Edit panel (Lo-fi)',
        value: 'edit-panel-lo-fi',
        width: 'half',
        align: 'left',
    },
    {
        list: EditPanelBlank,
        main: 'edit-panel-blank.svg',
        label: 'Edit panel (Blank)',
        value: 'edit-panel-blank',
        width: 'half',
        align: 'left',
    },
    {
        list: EditHeader,
        main: 'edit-header.svg',
        label: 'Editor header',
        value: 'edit-header',
        width: 'half',
        align: 'left',
    },
    {
        list: EditHeaderLoFi,
        main: 'edit-header-lo-fi.svg',
        label: 'Editor header (Lo-fi)',
        value: 'edit-header-lo-fi',
        width: 'half',
        align: 'left',
    },
    {
        list: ObjectPanelTab,
        main: 'object-panel-tab.svg',
        label: 'Object panel tabs',
        value: 'object-panel-tab',
        width: 'half',
        align: 'center',
    },
    {
        list: ObjectPanelTabLoFi,
        main: 'object-panel-tab-lo-fi.svg',
        label: 'Object panel tabs (Lo-fi)',
        value: 'object-panel-tab-lo-fi',
        width: 'half',
        align: 'center',
    },
    {
        list: Toolbar,
        main: 'toolbar.svg',
        label: 'Toolbar',
        value: 'toolbar',
        width: 'half',
        align: 'left',
    },
    {
        list: ToolbarLoFi,
        main: 'toolbar-lo-fi.svg',
        label: 'Toolbar (Lo-fi)',
        value: 'toolbar-lo-fi',
        width: 'half',
        align: 'left',
    },
    {
        list: Canvas,
        main: 'canvas.svg',
        label: 'Canvas',
        value: 'canvas',
        width: 'half',
        align: 'left',
    },
    {
        list: CanvasLoFi,
        main: 'canvas-lo-fi.svg',
        label: 'Canvas (Lo-fi)',
        value: 'canvas-lo-fi',
        width: 'half',
        align: 'left',
    },
    {
        list: SelectionHandles,
        main: 'selection-handles.svg',
        label: 'Selection handles',
        value: 'selection-handles',
        width: 'half',
        align: 'center',
    },
];
