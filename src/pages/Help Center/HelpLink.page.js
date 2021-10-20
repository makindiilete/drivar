import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import routes from "../../routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";
import ceo from "../../assets/images/Company/CEO.png";

const HelpLinkPage = (props) => {
  let location = useLocation();
  const { pathname } = location;
  const title = pathname.split("/")[3];
  const current = pathname.split("/")[4];
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="helpNotes">
      <br />
      <br />
      <br />
      <div className="helpNotes__nav">
        <div className="container d-flex justify-content-between align-items-center">
          <div
            className="d-flex justify-content-center align-items-center"
            onClick={() => history.goBack()}
            style={{ cursor: "pointer" }}
          >
            <div className="companyNotes__nav__icon__container">
              <FontAwesomeIcon
                icon={icons.faAngleLeft}
                className="companyNotes__nav__icon"
              />
            </div>
            <span>
              <p
                className="font-weight-bolder pr-4"
                style={{ borderRight: "1px solid grey" }}
              >
                Back
              </p>
            </span>
            <span className="primary-text pl-4 font-weight-bold">
              Ryva help center / {title} /{" "}
              <span className="text-dark">{current}</span>
            </span>
          </div>
        </div>
        <br />
        <br />
        <div className="container">
          <h2>{current}</h2>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
            dicta ducimus eveniet itaque labore natus optio pariatur quasi qui
            voluptatem. Alias, amet animi aperiam assumenda atque corporis culpa
            dicta dignissimos doloremque dolores eligendi ex expedita, facere
            fuga id illo laborum libero maxime nesciunt nihil nobis provident
            quaerat rem sunt suscipit totam veniam veritatis. Accusantium
            adipisci animi aspernatur error, eum excepturi exercitationem fugiat
            harum illum incidunt itaque perferendis quisquam saepe sed sequi
            tenetur unde. Ad architecto, asperiores consequuntur, cum dolores ea
            eius excepturi, illum modi necessitatibus placeat quos ratione
            repudiandae tempore temporibus! Accusamus alias, aliquid amet at
            dolores exercitationem facilis, laboriosam molestias necessitatibus
            officiis possimus provident quis recusandae soluta tenetur, unde
            vero! Debitis deserunt earum est facere fuga hic id illo illum
            incidunt iusto labore libero maxime, modi nemo nisi odit possimus
            praesentium, quas quia quis rerum saepe soluta tempora temporibus ut
            veniam veritatis voluptatem. Ad cumque dolor eum ex hic incidunt
            magnam molestias obcaecati odio, placeat quidem reiciendis.
            Accusantium at autem consectetur consequuntur debitis dignissimos
            doloremque ea enim esse explicabo hic ipsa ipsam iste laboriosam
            maiores nam nihil, nisi odit quidem quisquam repellendus rerum saepe
            sequi sunt tempora temporibus, tenetur unde veritatis vero
            voluptatum? Animi atque consequatur consequuntur debitis dicta
            impedit iure iusto natus nobis odit omnis placeat, quae, repellat
            sint tenetur ullam veritatis. Ab commodi consectetur culpa dolor
            dolores eius et iusto molestiae quia sapiente? Aspernatur eaque eius
            eligendi nemo neque perferendis possimus sapiente. Ad, debitis
            delectus fugit, hic mollitia nisi praesentium provident quasi qui
            quia ratione repellat. Adipisci consequuntur dignissimos dolore est
            excepturi impedit in ipsa, minima placeat quidem repudiandae
            similique temporibus voluptatem? Architecto asperiores aspernatur
            at, delectus dolor dolores et, facilis fuga fugit illo magnam, magni
            maiores modi neque nesciunt non odit possimus repudiandae suscipit
            tempore? Ab accusantium adipisci cum dignissimos, facere nemo
            officia quam soluta voluptas.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi
            autem illo impedit mollitia perspiciatis quis saepe! Asperiores
            aspernatur commodi debitis dolorum enim, esse modi, molestiae
            nostrum suscipit, ullam veritatis vitae voluptate. Accusamus
            adipisci aspernatur at atque beatae cumque debitis dolorum eaque
            enim, eos eum expedita facilis fuga harum id illum itaque molestias
            nisi numquam odio optio quasi, qui quidem rem reprehenderit suscipit
            unde! Ab alias aliquam aliquid amet commodi corporis cum cupiditate
            doloribus fuga illum impedit incidunt ipsam, nam natus porro,
            provident, quasi quis reiciendis repellendus reprehenderit totam
            voluptate voluptates. Asperiores consequuntur distinctio dolores
            est, minima quaerat sed voluptatem.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
            dignissimos dolore itaque mollitia nostrum quibusdam recusandae
            reiciendis repellat sequi voluptates? Aliquid blanditiis dolor
            dolorum eius, et expedita explicabo ipsam minus, neque nihil
            obcaecati soluta, suscipit voluptatum! A ad earum est inventore
            itaque maiores minima nihil nobis, obcaecati optio provident quo sed
            similique soluta tempora voluptates voluptatum? Explicabo facere
            fugit ipsum repellendus voluptas. Accusamus animi assumenda atque
            autem deserunt dolore est eveniet hic labore laudantium natus omnis
            pariatur praesentium quas quidem, rerum veritatis. Animi assumenda
            cum, eligendi fuga hic impedit in incidunt magni maxime nobis
            praesentium provident quibusdam quos unde vitae! Architecto
            consequatur dignissimos eius expedita, iste magni natus odit quae
            quibusdam suscipit! Architecto dicta esse et facilis fuga fugiat
            maiores nobis. Accusantium, aspernatur consequatur deleniti
            dignissimos dolor dolore doloremque ducimus, error expedita fugiat
            hic id illo impedit itaque maiores molestiae nemo nesciunt officiis
            praesentium quasi quidem recusandae repellat sunt tempore ullam unde
            vel veritatis! A accusamus accusantium amet aperiam, consectetur
            doloribus ea enim est excepturi fuga inventore ipsum mollitia non,
            numquam officia porro praesentium qui quis, quos repellendus rerum
            sit voluptatum? Cumque eveniet facere perferendis. Atque dolorem
            eaque, esse exercitationem fugiat incidunt inventore magni nihil
            quia quisquam suscipit totam, voluptatum?
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet eos
            fuga quo rerum saepe! Ad aliquam aliquid animi architecto aspernatur
            cupiditate, dolore eaque enim est fuga hic illo inventore ipsa iste
            iusto laborum magni maiores minus molestiae nesciunt nihil odio
            omnis perspiciatis porro praesentium quasi quos repellendus rerum
            similique sint sit soluta suscipit tenetur ullam vel voluptate
            voluptatum? Accusantium alias, animi cumque dolorum est inventore
            nemo nisi provident quaerat repellat repellendus repudiandae
            tempore, voluptatum! Aliquid architecto doloremque eos et facere
            maxime quam ratione ullam. Ad animi cum cupiditate, dolores incidunt
            quisquam sint voluptatum? Cumque explicabo impedit obcaecati saepe
            suscipit! Nesciunt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HelpLinkPage;
