// ==UserScript==
// @name         FitGirl Repacks 跳转Steam商店 - FitGirl2 Repacks to Steam Store
// @namespace    https://github.com/J-EnJay/FitGirl2Steam
// @version      1.0
// @description  Adds Steam store links to game titles on fitgirl-repacks.site
// @description:zh-CN 为 fitgirl-repacks.site 网站内的游戏标题自动添加 Steam 商店和 SteamDB 的搜索链接
// @author       JEnJay
// @match        https://fitgirl-repacks.site/*
// @icon         https://fitgirl-repacks.site/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to create Steam store search URL
    function createSteamUrl(gameTitle) {
        return 'https://store.steampowered.com/search/?term=' + encodeURIComponent(gameTitle);
    }

    // Function to create SteamDB search URL
    function createSteamDbUrl(gameTitle) {
        return 'https://steamdb.info/search/?a=app&q=' + encodeURIComponent(gameTitle);
    }

    // Add Steam and SteamDB links to h3 titles in entry content
    const contentTitles = document.querySelectorAll('.entry-content h3');
    contentTitles.forEach(titleElement => {
        // Check if this h3 contains a strong tag with game title
        const strongElement = titleElement.querySelector('strong');
        if (strongElement) {
            // Get text content excluding span tags inside strong
            let gameTitle = '';
            strongElement.childNodes.forEach(node => {
                if (node.nodeType === Node.TEXT_NODE) {
                    gameTitle += node.textContent;
                }
            });
            gameTitle = gameTitle.trim();
            // 过滤掉“ – ”及其之后的所有字符串
            const dashIndex = gameTitle.indexOf(' – ');
            if (dashIndex !== -1) {
                gameTitle = gameTitle.substring(0, dashIndex).trim();
            }
            const steamUrl = createSteamUrl(gameTitle);
            const steamDbUrl = createSteamDbUrl(gameTitle);

                // Create Steam link element with icon
                const steamLink = document.createElement('a');
                steamLink.href = steamUrl;
                steamLink.target = '_blank';
                steamLink.rel = 'noopener noreferrer';
                steamLink.style.marginLeft = '8px';
                steamLink.style.padding = '2px 6px';
                steamLink.style.backgroundColor = '#1b2838';
                steamLink.style.color = 'white';
                steamLink.style.borderRadius = '3px';
                steamLink.style.textDecoration = 'none';
                steamLink.style.display = 'inline-flex';
                steamLink.style.alignItems = 'center';
                steamLink.style.fontSize = '0.8em';
                steamLink.innerHTML = `
                    <svg width="14" height="14" viewBox="0 0 24 24" style="margin-right: 4px; fill: white;">
                        <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C7.4,22 3.55,18.92 2.36,14.73L6.19,16.31C6.45,17.6 7.6,18.58 8.97,18.58C10.53,18.58 11.8,17.31 11.8,15.75V15.62L15.2,13.19H15.28C17.36,13.19 19.05,11.5 19.05,9.42C19.05,7.34 17.36,5.65 15.28,5.65C13.2,5.65 11.5,7.34 11.5,9.42V9.47L9.13,12.93L8.97,12.92C8.38,12.92 7.83,13.1 7.38,13.41L2,11.2C2.43,6.05 6.73,2 12,2M8.28,17.17C9.08,17.5 10,17.13 10.33,16.33C10.66,15.53 10.28,14.62 9.5,14.29L8.22,13.76C8.71,13.58 9.26,13.57 9.78,13.79C10.31,14 10.72,14.41 10.93,14.94C11.15,15.46 11.15,16.04 10.93,16.56C10.5,17.64 9.23,18.16 8.15,17.71C7.65,17.5 7.27,17.12 7.06,16.67L8.28,17.17M17.8,9.42C17.8,10.81 16.67,11.94 15.28,11.94C13.9,11.94 12.77,10.81 12.77,9.42A2.5,2.5 0 0,1 15.28,6.91C16.67,6.91 17.8,8.04 17.8,9.42M13.4,9.42C13.4,10.46 14.24,11.31 15.29,11.31C16.33,11.31 17.17,10.46 17.17,9.42C17.17,8.38 16.33,7.53 15.29,7.53C14.24,7.53 13.4,8.38 13.4,9.42Z"/>
                    </svg>
                    Steam
                `;

                // Create SteamDB link element with icon
                const steamDbLink = document.createElement('a');
                steamDbLink.href = steamDbUrl;
                steamDbLink.target = '_blank';
                steamDbLink.rel = 'noopener noreferrer';
                steamDbLink.style.marginLeft = '4px';
                steamDbLink.style.padding = '2px 6px';
                steamDbLink.style.backgroundColor = '#1a1a1a';
                steamDbLink.style.color = 'white';
                steamDbLink.style.borderRadius = '3px';
                steamDbLink.style.textDecoration = 'none';
                steamDbLink.style.display = 'inline-flex';
                steamDbLink.style.alignItems = 'center';
                steamDbLink.style.fontSize = '0.8em';
                steamDbLink.innerHTML = `
                    <svg width="14" height="14" viewBox="0 0 24 24" style="margin-right: 4px; fill: white;">
                        <path d="M11.981 0C5.72 0 .581 2.231.02 5.081l6.675 1.257c.544-.17 1.162-.244 1.8-.244l3.131-1.875c-.037-.469.244-.956.881-1.35.9-.581 2.307-.9 3.732-.9a8.582 8.582 0 012.812.412c2.1.713 2.569 2.082 1.069 3.057-.956.618-2.494.937-4.013.9l-4.125 1.48c-.037.3-.243.582-.637.845-1.106.712-3.263.88-4.8.356-.675-.225-1.125-.563-1.313-.9L.47 7.2c.431.675 1.125 1.294 2.025 1.838C.938 9.938 0 11.062 0 12.28c0 1.2.9 2.307 2.419 3.206C.9 16.37 0 17.476 0 18.675 0 21.619 5.363 24 12 24c6.619 0 12-2.381 12-5.325 0-1.2-.9-2.306-2.419-3.188C23.1 14.588 24 13.482 24 12.282c0-1.219-.938-2.362-2.512-3.262 1.556-.956 2.493-2.138 2.493-3.413 0-3.093-5.381-5.606-12-5.606zm4.275 2.663c-.975.018-1.912.225-2.512.618-1.031.675-.713 1.594.712 2.082 1.425.487 3.394.337 4.425-.338 1.032-.675.713-1.594-.712-2.062a6.376 6.376 0 00-1.913-.282zm.057.318c1.387 0 2.493.525 2.493 1.163 0 .637-1.106 1.162-2.493 1.162-1.388 0-2.494-.525-2.494-1.162 0-.638 1.106-1.163 2.494-1.163zM8.493 6.45c-.3.019-.58.038-.862.075l1.707.319a2.03.94 0 11-1.52 1.744l-1.668-.32c.188.17.45.32.806.45 1.2.413 2.888.282 3.75-.28.863-.563.6-1.35-.6-1.744-.487-.169-1.068-.244-1.612-.244zm11.944 3.113v1.743c0 2.063-3.787 3.732-8.437 3.732-4.669 0-8.437-1.67-8.437-3.732V9.581c2.156.994 5.137 1.613 8.418 1.613 3.3 0 6.3-.619 8.475-1.631zm0 6.487v1.65c0 2.063-3.787 3.731-8.437 3.731-4.669 0-8.437-1.668-8.437-3.731v-1.65c2.175.956 5.137 1.538 8.437 1.538s6.281-.582 8.438-1.538z"/>
                    </svg>
                    SteamDB
                `;

                // Add links to title
                titleElement.appendChild(steamLink);
                titleElement.appendChild(steamDbLink);
        }
    });
})();