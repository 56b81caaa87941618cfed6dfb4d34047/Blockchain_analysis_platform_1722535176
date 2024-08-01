/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
Vue.component("simple_footer_component_1722535180", {
    template: `
    <footer id="footer-section" class="flex-1 bg-gradient-to-r from-pink-400 to-purple-600 backdrop-filter backdrop-blur-lg bg-opacity-30">
            <div id="footer-container" class="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
                <hr id="footer-divider" class="my-6 border-pink-300 sm:mx-auto lg:my-8">
                <div id="footer-content" class="text-center">
                    <div class="flex">
                        <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-5 text-2xl font-bold text-white">
                            <img id="footer-logo" src="./images/logo.svg" class="h-8 mr-3 sm:h-10" alt="Landwind Logo" />
                            ChainScan - Blockchain Data Analytics
                        </a>
                    </div>
                </div>
                <div class="flex">
                    <div id="footer-text" class="flex-1 block text-sm text-center text-white font-medium">
                        Stay ahead of the curve with ChainScan's cutting-edge blockchain analysis tools. Uncover insights, identify trends, and make data-driven decisions for your blockchain projects. Powered by advanced algorithms and a user-friendly interface, ChainScan empowers you to extract maximum value from the ever-evolving blockchain landscape.
                    </div>
                </div>
            </div>
        </footer> 
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
