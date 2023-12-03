const HeaderComponent = () => (
  <div className="header">
    <div className="logo-container">
      <img
        className="logo"
        width="80"
        height="80"
        src="https://img.icons8.com/matisse/100/fire.png"
        alt="fry"
      />
    </div>
    <h1>Flames</h1>
    <div className="nav-items">
      <ul>
        <li>
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/3d-fluency/188/info.png"
            alt="info"
            onClick={() => {
              alert(
                "A simple web app made with React, Firebase and ❤️‍🔥 by Yeshwin."
              );
              document.querySelector(
                "body"
              ).style.backgroundImage = `url(${"https://images.unsplash.com/photo-1515890435782-59a5bb6ec191?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})`;
            }}
          />
        </li>
      </ul>
    </div>
  </div>
);

export default HeaderComponent;
