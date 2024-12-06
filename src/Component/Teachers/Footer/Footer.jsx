import "./Footer.css";

import star16 from "../../../image/Star-16.svg";
import quote from "../../../image/quoteOrigin.png";
import arrowOrange from "../../../image/arrowOrange.svg";
import { useEffect } from "react";
import Feedback from "../Feedback/Feedback";

function Footer(props) {
  const { data, dataFeedback } = props;

  useEffect(() => {
    function adjustZoom() {
      let headerTitle = document.querySelector(".footer");

      let zoomValue = parseFloat(
        window.getComputedStyle(headerTitle).getPropertyValue("zoom")
      );

      if (window.innerWidth <= 479) {
        zoomValue = window.innerWidth * 0.003;
      } else {
        zoomValue = 1;
      }
      headerTitle.style.zoom = zoomValue;
    }
    window.addEventListener("resize", adjustZoom);
    adjustZoom();

    return () => window.removeEventListener("resize", adjustZoom);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-container-image">
          <img src={quote} alt="quoteBg" />
        </div>
        <div className="footer-container-content">
          <div className="footer-container-content-about">
            <div className="footer-container-content-about-title">
              <img src={star16} alt="star" />
              <p>Любимая цитата</p>
            </div>
            <div className="footer-container-content-about-text">
              <p>«{data.quote}»</p>
            </div>
            {/* <div className='footer-container-content-about-under'>
                            <p>Личное изречение</p>
                        </div> */}
          </div>
        </div>
        <div className="footer-container-content-button">
          <button
            className="leave-feedback"
            onClick={() => {
              document.querySelector(".popup").classList.add("show");
              // document.querySelector('.popup').style.display = 'flex';
              document.getElementsByTagName("body")[0].style.overflow =
                "hidden";
            }}
          >
            Написать отзыв о педагоге
          </button>
        </div>
      </div>
      {dataFeedback.length !== 0 && <Feedback dataFeedback={dataFeedback} />}
      <div className="footer-content-feedback">
        <div
          className="footer-client-feedback-backbutton-container"
          onClick={() => {
            document.querySelector(".footer-content-feedback").style.display =
              "none";
            document.getElementsByTagName("body")[0].style.overflow = "auto";
          }}
        >
          <div>
            <img src={arrowOrange} alt="arrow-orange" />
          </div>

          <p>Назад</p>
        </div>
        <div className="footer-client-feedback-content">
          <p>Отзывы о {data.teacher_name}</p>
          <div className="footer-client-feedback-content-items">
            {dataFeedback.length !== 0 && displayFeedback(dataFeedback)}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

function displayFeedback(data) {
  return data.map((item) => (
    <div key={item.parent_name} className="footer-client-feedback-content-item">
      <p className="footer-client-feedback-content-item-name">{item.parent_name}</p>
      <p className="footer-client-feedback-content-item-lesson">
        {item.lesson_name}
      </p>
      <p className="footer-client-feedback-content-item-text">{item.text}</p>
    </div>
  ));
}
//   {
//     name: "Виктория",
//     lesson: "Подготовка к школе",
//     comment: `Хочу поблагодарить Аллу Николаевну за занятия со своей дочерью. Уже
//       занимаемся полтора месяца, но хочу отметить что Алла Николаевна
//       сразу понравилась ребенку. Уже после первого занятия дочь сказала
//       что будет продолжать заниматься с удовольствием. Задача у меня для
//       дочки, помочь ей подготовиться к проверочным работам в 4 классе,
//       чтобы появилась уверенность в своих силах и знаниях. И я вижу
//       результат, дочка стала увереннее и быстрее решать задания. Алла
//       Николаевна – талантливый, преданный своему делу педагог. Её отличает
//       невероятное трудолюбие, чуткость, доброта, приветливость,
//       отзывчивость. Очень рекомендую. Алла Николаевна, большое спасибо вам
//       за вашу помощь!`
//   },
//   {
//     name: "Ольга",
//     lesson: "Спорт",
//     comment: `Хочу поблагодарить Аллу Николаевну за занятия со своей дочерью. Уже
//       занимаемся полтора месяца, но хочу отметить что Алла Николаевна
//       сразу понравилась ребенку. Уже после первого занятия дочь сказала
//       что будет продолжать заниматься с удовольствием. Задача у меня для
//       дочки, помочь ей подготовиться к проверочным работам в 4 классе,
//       чтобы появилась уверенность в своих силах и знаниях. И я вижу
//       результат, дочка стала увереннее и быстрее решать задания. Алла
//       Николаевна – талантливый, преданный своему делу педагог. Её отличает
//       невероятное трудолюбие, чуткость, доброта, приветливость,
//       отзывчивость. Очень рекомендую. Алла Николаевна, большое спасибо вам
//       за вашу помощь!`
//   },
//   {
//     name: "Максим",
//     lesson: "Рисование",
//     comment: `Хочу поблагодарить Аллу Николаевну за занятия со своей дочерью. Уже
//       занимаемся полтора месяца, но хочу отметить что Алла Николаевна
//       сразу понравилась ребенку. Уже после первого занятия дочь сказала
//       что будет продолжать заниматься с удовольствием. Задача у меня для
//       дочки, помочь ей подготовиться к проверочным работам в 4 классе,
//       чтобы появилась уверенность в своих силах и знаниях. И я вижу
//       результат, дочка стала увереннее и быстрее решать задания. Алла
//       Николаевна – талантливый, преданный своему делу педагог. Её отличает
//       невероятное трудолюбие, чуткость, доброта, приветливость,
//       отзывчивость. Очень рекомендую. Алла Николаевна, большое спасибо вам
//       за вашу помощь!`
//   },
//   {
//     name: "Алексей",
//     lesson: "Логопед",
//     comment: `Хочу поблагодарить Аллу Николаевну за занятия со своей дочерью. Уже
//       занимаемся полтора месяца, но хочу отметить что Алла Николаевна
//       сразу понравилась ребенку. Уже после первого занятия дочь сказала
//       что будет продолжать заниматься с удовольствием. Задача у меня для
//       дочки, помочь ей подготовиться к проверочным работам в 4 классе,
//       чтобы появилась уверенность в своих силах и знаниях. И я вижу
//       результат, дочка стала увереннее и быстрее решать задания. Алла
//       Николаевна – талантливый, преданный своему делу педагог. Её отличает
//       невероятное трудолюбие, чуткость, доброта, приветливость,
//       отзывчивость. Очень рекомендую. Алла Николаевна, большое спасибо вам
//       за вашу помощь!`
//   },
//   {
//     name: "Вася",
//     lesson: "Подготовка к школе",
//     comment: `Хочу поблагодарить Аллу Николаевну за занятия со своей дочерью. Уже
//       занимаемся полтора месяца, но хочу отметить что Алла Николаевна
//       сразу понравилась ребенку. Уже после первого занятия дочь сказала
//       что будет продолжать заниматься с удовольствием. Задача у меня для
//       дочки, помочь ей подготовиться к проверочным работам в 4 классе,
//       чтобы появилась уверенность в своих силах и знаниях. И я вижу
//       результат, дочка стала увереннее и быстрее решать задания. Алла
//       Николаевна – талантливый, преданный своему делу педагог. Её отличает
//       невероятное трудолюбие, чуткость, доброта, приветливость,
//       отзывчивость. Очень рекомендую. Алла Николаевна, большое спасибо вам
//       за вашу помощь!`
//   }
// ];
