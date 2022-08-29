import React, { useEffect } from 'react';
import styles from '../css/Widget.module.css';

const Widget = () => {
  const onClickAppForm = () => {
    return window.open('https://forms.gle/DA6VpqhBQVpqZ79ZA', '_blank');
  };

  useEffect(() => {
    const button = document.querySelector(`.${styles.push_button}`);
    document.addEventListener('scroll', () => {
      if (window.scrollY > 540) {
        button.style.position = 'static';
      } else if (window.scrollY < 540) {
        button.style.position = 'fixed';
      }
    });
  }, []);

  return (
    <div className={styles.widget}>
      <div className={styles.container}>
        <img src="/home.png" alt="home" className={styles.img} />
        {/* <div className={styles.main_container}>
          <div>
            <div>
              <div
                className={styles.main_title}
                style={{
                  background: 'url(/title.png)',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '100% 100%',
                }}
              ></div>
              <div className={styles.push_button} onClick={() => onClickAppForm()}>
                <span>앱 출시 알람 신청하기</span>
              </div>
            </div>
            <div
              className={styles.main_widget}
              style={{
                background: 'url(/widget.png)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% auto',
              }}
            >
              <div
                className={styles.main_ment}
                style={{
                  background: 'url(/ment.png)',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '100% auto',
                }}
              />
            </div>
          </div>
        </div>

        <div className={styles.cody_container}>
          <div>
            <div className={styles.cody_title}>
              <p className={styles.title}>코디 검색</p>
              <p className={styles.subtitle}>
                제품을 기준으로
                <br />
                빠르고 정확한 코디 검색
              </p>
              <p className={styles.description}>
                코디가 궁금한 제품으로 검색하면
                <br />
                코디들을 한눈에 확인해 볼 수 있어요
              </p>
            </div>
            <div
              className={styles.cody_iphone}
              style={{ background: 'url(/cody.png)', backgroundSize: '380px 660px', backgroundRepeat: 'no-repeat' }}
            />
            <div
              className={styles.cody_iphone_m}
              style={{ background: 'url(/cody.png)', backgroundSize: '250px 440px', backgroundRepeat: 'no-repeat' }}
            />
          </div>
        </div>

        <div className={styles.manage_container}>
          <div>
            <div
              className={styles.manage_iphone}
              style={{ background: 'url(/manage.png)', backgroundSize: '380px 660px', backgroundRepeat: 'no-repeat' }}
            />
            <div
              className={styles.manage_iphone_m}
              style={{ background: 'url(/manage.png)', backgroundSize: '250px 440px', backgroundRepeat: 'no-repeat' }}
            />
            <div className={styles.manage_title}>
              <p className={styles.title}>옷 등록</p>
              <p className={styles.subtitle}>마음껏 담을 수 있는 옷장</p>
              <p className={styles.description}>
                제품의 이미지와 정보를 등록해보세요.
                <br />
                내가 가진 옷 뿐만 아니라 평소 사고 싶었던 옷,
                <br />
                입어보고 싶었었던 옷들도 저장해 놓을 수 있어요.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.plan_container}>
          <div>
            <div className={styles.plan_title}>
              <p className={styles.title}>코디 공유</p>
              <p className={styles.subtitle}>
                내 맘대로 만드는
                <br />
                다양한 코디
              </p>
              <p className={styles.description}>
                코디를 직접 만들어서 공유해보세요
                <br />
                당신의 코디가 마음에 드는 사람이 또 있을 거에요 :)
              </p>
            </div>
            <div
              className={styles.plan_iphone}
              style={{ background: 'url(/plan.png)', backgroundSize: '380px 660px', backgroundRepeat: 'no-repeat' }}
            />
            <div
              className={styles.plan_iphone_m}
              style={{ background: 'url(/plan.png)', backgroundSize: '250px 440px', backgroundRepeat: 'no-repeat' }}
            />
          </div>
        </div>

        <div className={styles.push_button_container}>
          <div className={styles.push_button} onClick={() => onClickAppForm()}>
            <span>앱 출시 알람 신청하기</span>
          </div>
        </div> */}
        <div className={styles.push_button_container}>
          <div className={styles.push_button} onClick={() => onClickAppForm()}>
            <span>앱 출시 알림 신청하기</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Widget);
