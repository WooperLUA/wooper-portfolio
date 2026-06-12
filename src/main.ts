import { AtlasRouter } from 'atlas-web/router';
import {AppView} from "@views";
import {uArchive, uState} from "atlas-web";

type Theme = 'light' | 'dark';
const appArchive = uArchive<{theme : Theme}>('appArchive',uState({
  theme : 'light',
}));

new AtlasRouter({
  rootId: 'app',
  basePath : '/wooper-portfolio',
  routes: [{ path: '/', view: AppView }]
});