tinymce.PluginManager.add('instagram', function(editor, url) {
    function openWindow() {
        editor.windowManager.open({
            title: 'Instagram Embed',
            body: {
                type: 'textbox',
                name: 'instagramembed',
                multiline: true,
                minWidth: 600,
                minHeight: 300,
                spellcheck: false,
                style: 'direction: ltr; text-align: left'
            },
            onsubmit: function(e) {
                var embedCode = e.data.instagramembed.replace(/<script[^>]*>(?:(?!<\/script>)[^])*<\/script>/g, '');
                if (embedCode != '') {
                    tinyMCE.activeEditor.insertContent('<div class="instagram" contenteditable="false">' + embedCode + '</div><p></p>');
                }
            }
        });
    }
    editor.addButton('instagram', {
        text: false,
        icon: true,
        image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPjxzdmcgaGVpZ2h0PSIzMiIgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7ZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMiAzMiIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iMzIiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnPjxnIGlkPSJJbnN0YWdyYW1fMV8iPjxnIGlkPSJJbnN0YWdyYW0iPjxwYXRoIGQ9Ik0yOCwwSDRDMS44LDAsMCwxLjgsMCw0djhoMzJWNEMzMiwxLjgsMzAuMiwwLDI4LDB6IiBpZD0iSGVhZCIgc3R5bGU9ImZpbGw6Izg5NUE0RDsiLz48cGF0aCBkPSJNMiwwLjZWMTJoMlYwQzMuMywwLDIuNiwwLjIsMiwwLjZ6IiBpZD0iUmVkX3g1Rl9TdHJpcGVzIiBzdHlsZT0iZmlsbDojRkYzOTM5OyIvPjxyZWN0IGhlaWdodD0iMTIiIGlkPSJZZWxsb3dfeDVGX1N0cmlwZXMiIHN0eWxlPSJmaWxsOiNGRUQwNDk7IiB3aWR0aD0iMiIgeD0iNCIvPjxyZWN0IGhlaWdodD0iMTIiIGlkPSJHcmVlbl94NUZfU3RyaXBlcyIgc3R5bGU9ImZpbGw6IzEwREQ3NjsiIHdpZHRoPSIyIiB4PSI2Ii8+PHJlY3QgaGVpZ2h0PSIxMiIgaWQ9IkJsdWVfeDVGX1N0cmlwZXMiIHN0eWxlPSJmaWxsOiM1RkNDRkY7IiB3aWR0aD0iMiIgeD0iOCIvPjxjaXJjbGUgY3g9IjI2IiBjeT0iNiIgaWQ9IkxlbnNfMV8iIHI9IjMiIHN0eWxlPSJmaWxsOiMxNjI4Mzg7Ii8+PGNpcmNsZSBjeD0iMjYiIGN5PSI2IiBpZD0iTGVuc194NUZfT3V0ZXIiIHI9IjEuNSIgc3R5bGU9ImZpbGw6IzJDNDM1NjsiLz48Y2lyY2xlIGN4PSIyNiIgY3k9IjYiIGlkPSJMZW5zX3g1Rl9JbnNpZGUiIHI9IjAuNSIgc3R5bGU9ImZpbGw6IzQ3NjM3QTsiLz48cGF0aCBkPSJNMCwxMnYxNmMwLDIuMiwxLjgsNCw0LDRoMjRjMi4yLDAsNC0xLjgsNC00VjEySDB6IiBpZD0iQm9keSIgc3R5bGU9ImZpbGw6I0U1RTBEQzsiLz48ZyBpZD0iU2hhZG93Ij48cG9seWdvbiBwb2ludHM9IjI0LjcsMTIgMjIuNCw5LjYgMjIuNCwxMiAiIHN0eWxlPSJmaWxsOiM3NTQ4M0Q7Ii8+PHBhdGggZD0iTTIwLDEyTDkuNiwyMi40bDkuNiw5LjZIMjhjMi4yLDAsNC0xLjgsNC00di04LjdMMjQuNywxMkgyMHoiIHN0eWxlPSJmaWxsOiNEMENCQzU7Ii8+PC9nPjxjaXJjbGUgY3g9IjE2IiBjeT0iMTYiIGlkPSJMZW5zIiByPSI5IiBzdHlsZT0iZmlsbDojRENEN0QzOyIvPjxjaXJjbGUgY3g9IjE2IiBjeT0iMTYiIGlkPSJJbnNpZGVfeDVGX0xlbnMiIHI9IjciIHN0eWxlPSJmaWxsOiMxNjI4Mzg7Ii8+PGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgaWQ9Il94MzJfbmRfSW5uZXJfQ2lyY2xlIiByPSI0IiBzdHlsZT0iZmlsbDojMkM0MzU2OyIvPjxjaXJjbGUgY3g9IjE2IiBjeT0iMTYiIGlkPSJNaWRkbGVfQ2lyY2xlIiByPSIyIiBzdHlsZT0iZmlsbDojMTYyODM4OyIvPjxjaXJjbGUgY3g9IjE4LjUiIGN5PSIxMy41IiBpZD0iUmVmbGVjdGlvbiIgcj0iMS41IiBzdHlsZT0iZmlsbDojNDc2MzdBOyIvPjwvZz48L2c+PC9nPjwvc3ZnPg==',
        onclick: function() {
            openWindow();
        }
    });
    editor.addMenuItem('instagram', {
        text: 'Instagram Embed',
        context: 'tools',
        onclick: function() {
            openWindow();
        }
    });
    return {
        getMetadata: function () {
            return  {
                name: 'Instagram Embed',
                url: 'https://github.com/Pathologic/InstagramEmbed'
            };
        }
    };
});
