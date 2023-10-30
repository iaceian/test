import React, { useContext, useState } from 'react';
import { AppSettings } from './../../config/app-settings.js';

function ThemePanel() {
	const context = useContext(AppSettings);
	const [expand, setExpand] = useState(false);
	const [theme, setTheme] = useState((localStorage && typeof localStorage.appTheme !== 'undefined') ?  localStorage.appTheme : 'teal');
	const themeList = ['red','pink','orange','yellow','lime','green','teal','cyan','blue','purple','indigo','dark'];
	
	function handleDarkMode(e) {
		if (e.target.checked) {
			context.handleSetAppDarkMode(true);
		} else {
			context.handleSetAppDarkMode(false);
		}
	}
	
	function handleHeaderFixed(e) {
		if (e.target.checked) {
			context.handleSetAppHeaderFixed(true);
		} else {
			context.handleSetAppHeaderFixed(false);
		}
	}
	
	function handleSidebarFixed(e) {
		if (e.target.checked) {
			context.handleSetAppSidebarFixed(true);
		} else {
			context.handleSetAppSidebarFixed(false);
		}
	}
	
	function handleHeaderInverse(e) {
		if (e.target.checked) {
			context.handleSetAppHeaderInverse(true);
		} else {
			context.handleSetAppHeaderInverse(false);
		}
	}
	
	function handleSidebarGrid(e) {
		if (e.target.checked) {
			context.handleSetAppSidebarGrid(true);
		} else {
			context.handleSetAppSidebarGrid(false);
		}
	}
	
	function handleGradientEnabled(e) {
		if (e.target.checked) {
			context.handleSetAppGradientEnabled(true);
		} else {
			context.handleSetAppGradientEnabled(false);
		}
	}
	
	function toggleExpand(e) {
		e.preventDefault();
		setExpand(!expand);
	}
	
	function toggleTheme(e, theme) {
		e.preventDefault();
		context.handleSetAppTheme(theme);
		setTheme(theme);
	}
	
	return (
		<AppSettings.Consumer>
			{({appDarkMode, appHeaderFixed, appHeaderInverse, appSidebarFixed, appSidebarGrid, appGradientEnabled}) => (
				<div className={'theme-panel ' + (expand ? 'active' : '')}>
					<a href="#0" onClick={ e => toggleExpand(e) } className="theme-collapse-btn"><i className="fa fa-cog"></i></a>
					<div className="theme-panel-content" data-scrollbar="true" data-height="100%">
						<h5>App Settings</h5>
			
						<div className="theme-list">
							{themeList.map((themeListItem, i) => (
								<div key={i} className={'theme-list-item '+ ((themeListItem === theme) ? 'active' : '')}>
									<a href="#0" onClick={ e => toggleTheme(e, themeListItem) } className={'theme-list-link bg-'+ themeListItem}>&nbsp;</a>
								</div>
							))}
						</div>
			
						<div className="theme-panel-divider"></div>
			
						<div className="row mt-10px">
							<div className="col-8 control-label text-dark fw-bold">
								<div>Dark Mode</div>
							</div>
							<div className="col-4 d-flex">
								<div className="form-check form-switch ms-auto mb-0">
									<input type="checkbox" className="form-check-input" name="app-theme-dark-mode" onChange={handleDarkMode} id="appThemeDarkMode" checked={appDarkMode} value="1" />
									<label className="form-check-label" htmlFor="appThemeDarkMode">&nbsp;</label>
								</div>
							</div>
						</div>






					</div>
				</div>
			)}
		</AppSettings.Consumer>
	);
};

export default ThemePanel;
