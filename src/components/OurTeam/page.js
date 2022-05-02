import classes from "./OurTeam.module.css";

import Saurav from "./images/saurav.jpg";
import Vishvam from "./images/vishvam.jpg";
import Gargi from "./images/gargi.jpg";
import Yash from "./images/yash.jpg";

const Htmlcode = () => {
  return (
    <div className={classes.herocode}>
      <h1 className={classes.heading}>Meet Our Team</h1>
      <br></br>
      <div className={classes.cards}>
        <div className={classes.mem1}>
          <div className={classes.box1}>
            <img src={Saurav} className={classes.img1}></img>
            <div className={classes.name}>
              Saurav Mohanty<br></br>
              23342<br></br>
              <br></br>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/saurav-m-9b9247124/"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png"
                  className={classes.img3}
                ></img>
              </a>
              <a target="_blank" href="https://github.com/sauravmohanty02">
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  className={classes.img3}
                ></img>
              </a>
            </div>
          </div>
        </div>

        <div className={classes.mem2}>
          <div className={classes.box2}>
            <img src={Vishvam} className={classes.img1}></img>
            <div className={classes.name}>
              Vishvam Pawar<br></br>
              23332<br></br>
              <br></br>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/vishvam-pawar-44a667205"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png"
                  className={classes.img3}
                ></img>
              </a>
              <a target="_blank" href="https://github.com/vishvampawar11">
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  className={classes.img3}
                ></img>
              </a>
            </div>
          </div>
        </div>

        <div className={classes.mem3}>
          <div className={classes.box3}>
            <img
              src="https://avatars.githubusercontent.com/u/74365299?v=4"
              className={classes.img1}
            ></img>
            <div className={classes.name}>
              Shubham Pitale<br></br>
              23333<br></br>
              <br></br>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/shubham-pitale-b07692218/"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png"
                  className={classes.img3}
                ></img>
              </a>
              <a target="_blank" href="https://github.com/ShubhamPitale">
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  className={classes.img3}
                ></img>
              </a>
            </div>
          </div>
        </div>

        <div className={classes.mem4}>
          <div className={classes.box4}>
            <img src={Gargi} className={classes.img1}></img>
            <div className={classes.name}>
              Gargi Mhaskar<br></br>
              23322<br></br>
              <br></br>
              <a
                target="_blank"
                href="http://linkedin.com/in/gargi-mhaskar-097469208"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png"
                  className={classes.img3}
                ></img>
              </a>
              <a target="_blank" href="https://github.com/GSM268">
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  className={classes.img3}
                ></img>
              </a>
            </div>
          </div>
        </div>

        <div className={classes.mem5}>
          <div className={classes.box5}>
            <img src={Yash} className={classes.img1}></img>
            <div className={classes.name}>
              Yash Patil<br></br>
              23331<br></br>
              <br></br>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/yash-patil-665382239/"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png"
                  className={classes.img3}
                ></img>
              </a>
              <a target="_blank" href="https://github.com/yashpatil31">
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  className={classes.img3}
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Htmlcode;
