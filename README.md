# html5up-editorial

Try to use Free CSS3 Templates with React

The reference template is [Editorial](https://html5up.net/editorial)

# Convert free CSS3 template to React project

## Methods

1.  從 HTML5 中尋找有興趣的 template 並下載

    [HTML5 UP](https://html5up.net/)

2.  Create-react-app 建立一個 react app
3.  處理 code

    從 index.html 中，複製 `<body>` 部分的 code 到 App.js 中

4.  處理 image 顯示

    此時 image 都還無法顯示，我們當然可以到每個<img/>的 src 重新 import，但 create-react-app 的[usage guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#when-to-use-the-public-folder)則建議我們：將整個`image` folder 搬到`public`去

5.  處理 CSS

    App.js 中，`import './App.css'` 改為 `import './assets/css/main.css'`
    到這裡已經可以看到 Style 後的結果了

6.  建立 components

    將 App.js 中拆分一個一個的 block 成 component，放到`./src/components`中

7.  有些功能在 Template 中是使用 jQuery 實作出來的，我們可以換成不同的 React 功能來重新實作

    > 要注意重建出來的 element 與 template 設計的 className, id 之間的關係

    Examples:

    1.  在 Template Editorial，`Sidebar`會隨著 view 的大小，或是 sidebar icon 的點擊，增減 className `inactive`達到對應 style 的調整。
    原始 Template 裡是用 jQuery 實現，React project 中我們換用 React 的做法。
        
        - Click Icon:
    
            新增 state `className`到 component Sidebar 中

            ```jsx
            const [className, setClassName] = useState('');
            ```

            建立`onClickTogglePanel` method

            ```jsx
            const onClickTogglePanel = () => {
                if (className === '') {
                setClassName('inactive');
                } else if (className !== '') {
                setClassName('');
                }
            };
            ```

            增加`<a className="toggle"/>`到Sidebar中（class="toggle"的style已經設定好了）

            ```jsx
            <a className="toggle" onClick={onClickTogglePanel}></a>
            ```

        - Breakpoint
    
            用material-ui提供的breakpoint偵測

            ```jsx
            import { useTheme } from '@material-ui/core/styles';
            import useMediaQuery from '@material-ui/core/useMediaQuery';

            const theme = useTheme();
            const isLarge = useMediaQuery(theme.breakpoints.up('lg'));
            ```

            搭配useEffect()實現className的修改

            ```jsx
            useEffect(() => {
                if (isLarge) {
                setClassName('');
                } else if (!isLarge) {
                setClassName('inactive');
                }
            }, [isLarge]);
            ```

    2.  `Submenu`，在點擊後會增減 className `active`達到對應 style 的調整。

        - 建立 Submenu component

            ```jsx
            export default function Submenu({ children }) {
                const [className, setClassName] = useState('');
                return (
                    <>
                        <span className={`opener ${className}`}>Submenu</span>
                        <ul>{children}</ul>
                    </>
                );
            }
            ```

        - 建立`onClickTogglePanel` method

            ```jsx
            const onClickTogglePanel = () => {
                if (className === '') {
                    setClassName('active');
                } else if (className !== '') {
                    setClassName('');
                }
            };
            ```

8.  Sass

    用 Sass 建立出 css file

    ```bash
    yarn sass ./src/assets/sass/main.scss ./src/assets/css/main.css
    ```

    - 附註：

        在這個 template 中，在`main.scss`設定 breakpoints，而 breakpoints 是放在`_breakpoints.scss`中

        ```scss
        // ./src/assets/sass/libs/_breakpoints.scss
        $breakpoints: () !global;

        /// Sets breakpoints.
        /// @param {map} $x Breakpoints.
        @mixin breakpoints($x: ()) {
            $breakpoints: $x !global;
        }

        // ./src/assets/sass/main.scss
        @include breakpoints(
            (
                xlarge: (
                    1281px,
                    1680px,
                ),
                large: (
                    981px,
                    1280px,
                ),
                medium: (
                    737px,
                    980px,
                ),
                small: (
                    481px,
                    736px,
                ),
                xsmall: (
                    361px,
                    480px,
                ),
                xxsmall: (
                    null,
                    360px,
                ),
                xlarge-to-max: '(min-width: 1681px)',
                small-to-xlarge: '(min-width: 481px) and (max-width: 1680px)',
            )
        );
        ```

        但新版的 sass 不建議使用`!global`，如果拿掉會影響到下方`$media`的設定。

        有 2 種解法：

        1. 維持原本寫法。
        2. 拿掉 main 中的 breakpoints，改成到\_breakpoints.scss 裡設定

## Reference

[Using Free CSS3 Templates with React (Part 1)](https://medium.com/front-end-weekly/using-free-css3-templates-with-react-part-1-bc4edc08737b)

[Using Free CSS3 Templates with React (Part 2)](https://medium.com/@reginald.johnson/using-free-css3-templates-with-react-part-2-e428a16fe18f)
