import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import {
  IThemeManager
} from '@jupyterlab/apputils';


/**
 * A plugin for the GenePattern theme for JupyterLab
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'genepattern-theme-extension:plugin',
  requires: [IThemeManager],
  activate: function (app: JupyterFrontEnd, manager: IThemeManager) {
    const style = '@genepattern/genepattern-theme-extension/index.css';

    manager.register({
      name: 'GenePattern',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  },
  autoStart: true
};


export default plugin;