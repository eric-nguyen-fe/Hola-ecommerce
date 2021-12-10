import configureStore from "@testing-library/react";

import productModalSlice from "./product-modal/productModalSlice";

export const store = configureStore({
    reducer: {
        productModal: productModalSlice
    }
})