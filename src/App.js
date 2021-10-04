import Button from "./components/Button";
function App() {
  return (
    <div className="container">
      <div>
        <h2>Buttons</h2>
        <span>&#60;Button /&#62;</span>
        <span>&:hover, &:focus</span>
        <Button hover="default">Default</Button>

        <span>&#60;Button variant="outline" /&#62;</span>
        <span>&:hover, &:focus</span>
        <Button variant="outline" color="primary">
          Default
        </Button>

        <span>&#60;Button variant="text" /&#62;</span>
        <span>&:hover, &:focus</span>
        <Button variant="text" color="primary" hover="textHover">
          Default
        </Button>

        <span> &#60;Button disableShadow /&#62;</span>
        <Button disableShadow={"disableShadow"} color="backgroundPrimary">
          Default
        </Button>

        <div className="spanText">
          <span>&#60;Button disabled /&#62;</span>
          <span>&#60;Button variant="text" disabled /&#62;</span>
        </div>
        <div className="row">
          <Button disabled>Disabled</Button>
          <Button disabled variant="text">
            Disabled
          </Button>
        </div>

        <div className="spanText">
          <span>&#60;Button startIcon="local_grocery_store" /&#62;</span>
          <span>&#60;Button endIcon="local_grocery_store" /&#62;</span>
        </div>
        <div className="row">
          <Button color="backgroundPrimary" startIcon="local_grocery_store">
            Default
          </Button>
          <Button
            className="buttonRight"
            color="backgroundPrimary"
            endIcon="local_grocery_store"
          >
            Default
          </Button>
        </div>
        <div className="spanText">
          <span>&#60;Button size="sm" /&#62;</span>
          <span>&#60;Button size="md" /&#62;</span>
          <span>&#60;Button size="lg" /&#62;</span>
        </div>
        <div className="row">
          <Button size="sm" color="backgroundPrimary">
            Default
          </Button>
          <Button size="md" color="backgroundPrimary">
            Default
          </Button>
          <Button size="lg" color="backgroundPrimary">
            Default
          </Button>
        </div>

        <div className="spanText">
          <span>&#60;Button color="default" /&#62;</span>
          <span>&#60;Button color="primary" /&#62;</span>
          <span>&#60;Button color="secondary"/&#62;</span>
          <span>&#60;Button color="danger" /&#62;</span>
        </div>
        <div className="row">
          <Button hover="default">Default</Button>
          <Button
            className="buttonPrimary"
            hover="primaryHover"
            color="backgroundPrimary"
          >
            Default
          </Button>
          <Button color="secondary">Default</Button>
          <Button color="danger">Default</Button>
        </div>
      </div>
      <footer>
        <p>
          created by{" "}
          <a href="https://devchallenges.io/portfolio/Tobias235">Tobias235</a> -
          devChallenges.io
        </p>
      </footer>
    </div>
  );
}
export default App;
