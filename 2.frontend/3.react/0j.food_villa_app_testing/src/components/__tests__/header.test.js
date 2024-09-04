import { render } from "@testing-library/react";
import Header from "../Header";
import Cart from "../Cart";
import { Provider } from "react-redux";
import store from "../../../utils/store" ;
import { StaticRouter } from "react-router-dom/server";
// Instead of createBrowserRouter (which is for browser only), we use StaicRouter which will simulate its funcitonality in testing.
// Other use case of StaticRouter apart from testing: Server-side rendering.

test("logo should load on rendering", () => {
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header/>
            </Provider>
        </StaticRouter>
    );

    const logo = header.getAllByTestId("logo");
    expect(logo[0].src).toBe("http://localhost/dummyLogo.png");
})

test("carts should have 0 items", () => {
    const cart = render(
        <StaticRouter>
            <Provider store={store}>
                <Header/>
            </Provider>
        </StaticRouter>
    );

    const cartItems = cart.getByTestId("cart");
    expect(cartItems.innerHTML).toBe("Cart - 0 items");
})