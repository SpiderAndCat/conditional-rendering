# conditional-rendering

## Update: useState features, with conditional rendering
<img width="564" alt="Screenshot 2024-02-26 at 7 51 02 AM" src="https://github.com/SpiderAndCat/reactBasicsDemo_conditionalRenderingAndUseState/assets/130514366/ad98c19f-6d8b-4b56-994d-f64add90c140">

<img width="507" alt="Screenshot 2024-02-26 at 7 51 09 AM" src="https://github.com/SpiderAndCat/reactBasicsDemo_conditionalRenderingAndUseState/assets/130514366/9b556d39-6213-4b49-9739-d2e98727cec5">

- Real-time clock added, rendered each second with useState and `setInterval`
- Button added to toggle the useState hook for userIsRegistered. The `state[1]` method calls the toggle of `state[0]`, `userIsRegistered`, and uses conditional rendering to change the layout. An h1 also toggles it's contents, using the **ternary** operator, to communicate the state of `userIsRegistered`.

*See `src/components/App.jsx` for the **useState** and **ternary** opeartor logic for these features*

## Rendering a form based on `userIsRegistered`
Utilizing ***ternary*** and ***AND*** inline operators

<img width="1397" alt="Screenshot 2024-02-25 at 7 59 11 PM" src="https://github.com/SpiderAndCat/reactBasicsDemo_conditionalRendering/assets/130514366/4d2e4579-eb26-4f8b-be62-0ad2fe74b0f5">

As seen above, when `userIsRegistered` in `App.jsx`, a **Login** form will render from `Form.jsx`

<img width="1392" alt="Screenshot 2024-02-25 at 7 58 54 PM" src="https://github.com/SpiderAndCat/reactBasicsDemo_conditionalRendering/assets/130514366/d1351d92-7bcf-44f0-a3fb-91d3b7d5e1b7">

In the second figure, when `userIsRegistered` is `false` in `App.jsx`, a **Register** form will render from `Form.jsx`


## BONUS: Insight to the boring, but essential, basics
<img width="761" alt="Screenshot 2024-02-25 at 9 05 18 AM" src="https://github.com/SpiderAndCat/reactBasicsDemo_conditionalRendering/assets/130514366/d0092f1a-261f-4033-a52b-a674da6fc1dc">

Above is the code for the rendered App component. It contains headers and a Login form that are conditionally rendered.
`<Login />` is rendered conditionally, using the **terenary operator**, if `isLoggedIn` is `false`.
Otherwise, the user is logged in and a greeting message header is soley displayed.

```isLoggedIn ? <h1>Hello</h1> : <Login />```

![Screenshot 2024-02-25 at 9 05 03 AM](https://github.com/SpiderAndCat/reactBasicsDemo_conditionalRendering/assets/130514366/8a9b61f1-d9a4-48f2-9b09-176e0de5d31d)

The above figure shows the interface when `isLoggedIn` is locally set to `false`.

![Screenshot 2024-02-25 at 9 04 45 AM](https://github.com/SpiderAndCat/reactBasicsDemo_conditionalRendering/assets/130514366/73b30861-e399-4524-b14f-799e7d36372e)

The above figure shows the interface when `isLoggedIn`.


![Screenshot 2024-02-25 at 9 04 28 AM](https://github.com/SpiderAndCat/reactBasicsDemo_conditionalRendering/assets/130514366/bd92e53c-bd79-41b4-aa83-4864902a9e3a)

Furthermore, an additional heading will be rendered conditionally based on the time of a specified date using **the AND operator**. 

```currentTime > 17 && <h1>Why are you still working?</h1>```

Here, the hours are manually set in the `currentTime` variable. If the hours of this variable are after 5pm, an additional message will appear, shown in the above figure.
