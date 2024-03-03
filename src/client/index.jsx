import * as React from "react";
import * as ReactDOM from 'react-dom/client';
import {Header} from "../shared/Header";
import { hydrateRoot } from 'react-dom/client';

window.addEventListener('load', () => {
	hydrateRoot(document.getElementById('react_root'), <Header/>);
})
