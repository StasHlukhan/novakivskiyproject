import React, { useEffect, useState } from 'react';
import './MapRoad.css';
import { AddAnim } from '../../animation/animationOnScroll';
import Mother from '../../img/Mother.png';
import Father from '../../img/Father.png';
import Pumpkins from '../../img/Pumpkins.png';
import Sticks from '../../img/Sticks.png';
import Yan from '../../img/Yan.png';
import Leon from '../../img/Leon.png';
import Fair from '../../img/Fair.png';
import Maria from '../../img/Maria.png';
import Muse from '../../img/Muse.png';
import Hapiness from '../../img/Hapiness.png';
import Andrey from '../../img/Andrey.png';
import Plywood from '../../img/Plywood.png';
import Panel from '../../img/Panel.png';
import Heart_j from '../../img/heart_j.png';
import Lazarus from '../../img/Lazarus.png';
import Heart_s from '../../img/heart_s.png';
import Yarik from '../../img/Yarik.png';
import Sviatik from '../../img/Sviatik.png';
import Self from '../../img/Self.png';
import Kids from '../../img/Kids.png';
import Wife from '../../img/Wife.png';
import Lecture from '../../img/Lecture.png';
import Man from '../../img/Man.png';
import Oleksa from '../../img/Oleksa.png';
import Dora from '../../img/Dora.png';
import Virgin from '../../img/Virgin.png';
import Girl from '../../img/Girl.png';
import Secret from '../../img/Secret.png';
import Holubovska from '../../img/Holubovska.png';
import Female from '../../img/Female.png';
import Metropolit from '../../img/Metropolit.png';
import Exhibition from '../../img/Exhibition.png';
import Ukraine from '../../img/Ukraine.png';
import Book from '../../img/Book.png';
import Monograph from '../../img/Monograph.png';
import Pictures from '../../img/Pictures.png';
import Statuya from '../../img/Statuya.png';
import Sons from '../../img/Sons.png';
import Society from '../../img/Society.png';
import { useScrollAnim } from '../../hooks/useScrollAnim';
import { useNumber } from '../../hooks/useNumber';
import TimeLine from '../../components/TimeLine/TimeLine';
import { useTranslation } from 'react-i18next';
function MapRoad() {
  const [scrollAnim, scrolledState] = useScrollAnim();
  const [numberGrow, numberState] = useNumber();
  const { t, i18n } = useTranslation();
  useEffect(() => {
    numberGrow();
    scrollAnim();
    AddAnim();
  }, []);

  return (
    <div>
      <TimeLine />
      <div className="first_period">
        <div className="center">
          <div className={scrolledState ? 'my-class' : 'line'}>
            <span className="number">{numberState} </span>
          </div>
        </div>
        <div className="page">
          <div className="left_side">
            <p>{t('t1')} </p>
            <div className="mid_margin_top img">
              <img src={Mother} alt="" />
              <p className="caption">{t('cap1')}</p>
            </div>
            <p className="low_margin_top">{t('t2')} </p>
          </div>
          <div className="right_side">
            <div className="img">
              <img src={Father} alt="" />
              <p className="caption">{t('cap2')}</p>
            </div>
            <p className="mid_margin_top">{t('t3')} </p>
            <p className="low_margin_top">{t('t4')} </p>
          </div>
        </div>

        <div className="page">
          <div className="left_side">
            <p className="low_margin_top">{t('t5')} </p>
            <div>
              <p className="mid_margin_top">{t('t6')} </p>
              <p className="low_margin_top">{t('t7')}</p>
              <p className="low_margin_top">{t('t8')}</p>
            </div>
          </div>
          <div className="right_side">
            <p className="mid_margin_top">{t('t9')} </p>
            <p className="low_margin_top">{t('t10')}</p>
            <p className="mid_margin_top">{t('t11')}</p>
          </div>
        </div>

        <div className="page">
          <div className="left_side">
            <p className="low_margin_top">{t('t12')}</p>
            <div className="low_margin_top img">
              <img src={Sticks} alt="" />
              <p className="caption">{t('cap3')}</p>
            </div>
            <p className="low_margin_top">{t('t13')}</p>
          </div>
          <div className="right_side">
            <div className="low_margin_top img">
              <img src={Pumpkins} alt="" />
              <p className="caption">{t('cap4')}</p>
            </div>
            <p className="mid_margin_top">{t('t14')}</p>
          </div>
        </div>
      </div>

      <div className="title">
        <div className="main_title show_up element-animation">
          <h2>{t('title1')}</h2>
        </div>
      </div>

      <div className="second_period">
        <div className="page">
          <div className="left_side1">
            <div className="extra_img">
              <img src={Leon} alt="" />
              <p className="caption">{t('cap5')}</p>
            </div>
            <p className="mid_margin_top">{t('t15')}</p>
            <p className="extra_margin_top">{t('t16')}</p>
          </div>
          <div className="right_side1">
            <p>{t('t17')}</p>
            <p className="low_margin_top">{t('t18')}</p>
            <div className="img mid_margin_top">
              <img src={Yan} alt="" />
              <p className="caption">{t('cap6')}</p>
            </div>
            <p className="low_margin_top">{t('t19')}</p>
          </div>
        </div>

        <div className="page">
          <div className="left_side">
            <p className="mid_margin_top">{t('t20')}</p>
            <p className="mid_margin_top">{t('t21')} </p>
            <p className="mid_margin_top">{t('t22')} </p>
            <p className="low_margin_top margin_left ">{t('t23')} </p>
          </div>
          <div className="right_side">
            <p className="high_margin_top">{t('t24')}</p>
            <div className="img extra_margin_top">
              <img src={Fair} alt="" />
              <p className="caption">{t('cap7')}</p>
            </div>
          </div>
        </div>

        <div className="title">
          <div className="main_title show_up element-animation">
            <h2>{t('title2')}</h2>
          </div>
        </div>

        <div className="page">
          <div className="left_side1">
            <div className="img">
              <img src={Maria} alt="" />
              <p className="caption">{t('cap8')}</p>
            </div>
            <p className="mid_margin_top">{t('t25')}</p>
            <p>{t('t26')}</p>
            <p className="extra_margin_top margin_left">{t('t27')}</p>
          </div>
          <div className="right_side1">
            <p>{t('t28')}</p>
            <p className="extra_margin_top margin_left">{t('t29')}</p>
            <div className="img mid_margin_top">
              <img src={Muse} alt="" />
              <p className="caption">{t('cap9')}</p>
            </div>
          </div>
        </div>

        <div className="page">
          <div className="left_side1">
            <p className="mid_margin_top"> {t('t30')}</p>
            <p className="mid_margin_top">{t('t31')}</p>
            <p className="mid_margin_top">{t('t32')}</p>
            <p className="extra_margin_top">{t('t33')}</p>
          </div>
          <div className="right_side1">
            <p className="mid_margin_top">{t('t34')}</p>
            <p>{t('t35')}</p>
            <div className="img mid_margin_top">
              <img src={Hapiness} alt="" />
              <p className="caption">
              {t('cap10')}
              </p>
            </div>
          </div>
        </div>

        <div className="page">
          <div className="left_side0">
            <p className="mid_margin_top">{t('t36')}</p>
            <div className="img extra_margin_top">
              <img src={Andrey} alt="" />
              <p className="caption">{t('cap11')}</p>
            </div>
          </div>
          <div className="right_side0">
            <div className="img extra_big_margin_top">
              <img src={Plywood} alt="" />
              <p className="caption">{t('cap12')}</p>
            </div>
          </div>
        </div>

        <div className="page1">
          <div className="left_side2">
            <p>{t('t37')}</p>
            <div className="img low_margin_top">
              <img src={Panel} alt="" />
              <p className="caption">
              {t('cap13')}
              </p>
            </div>
            <div className="img extra_big_margin_top">
              <img src={Heart_j} alt="" />
              <p className="caption">
              {t('cap14')}
              </p>
            </div>
          </div>
          <div className="right_side2">
            <div className="img extra_hide_margin_top ">
              <img src={Lazarus} alt="" />
              <p className="caption">{t('cap15')}</p>
            </div>
            <div className="img extra_margin_top">
              <img src={Heart_s} alt="" />
              <p className="caption">
              {t('cap16')}
              </p>
            </div>
            <p className="extra_big_margin_top">{t('t38')}</p>
          </div>
        </div>

        <div className="page">
          <div className="left_side ">
            <div className="img extra_hide_margin_top">
              <img src={Yarik} alt="" />
              <p className="caption">{t('cap17')}</p>
            </div>
            <p>{t('t39')}</p>
            <div className="img extra_margin_top">
              <img src={Sviatik} alt="" />
              <p className="caption">{t('cap18')}</p>
            </div>
          </div>
          <div className="right_side ">
            <p>{t('t40')}</p>
            <div className="img extra_big_margin_top">
              <img src={Self} alt="" />
              <p className="caption">{t('cap19')}</p>
            </div>
            <p className="mid_margin_top">{t('t41')}</p>
          </div>
        </div>

        <div className="page">
          <div className="left_side">
            <div className="img">
              <img src={Kids} alt="" />
            </div>
            <p className="half_mid_margin_top">{t('t42')}</p>
            <p className="half_mid_margin_top">{t('t43')}</p>
            <p className="half_mid_margin_top">{t('t44')}</p>
          </div>
          <div className="right_side">
            <p>{t('t45')}</p>
            <div className="img mid_margin_top">
              <img src={Wife} alt="" />
              <p className="caption">{t('cap20')}</p>
            </div>
            <p className="half_mid_margin_top">{t('t46')}</p>
          </div>
        </div>
      </div>

      <div className="title">
        <div className="main_title show_up element-animation">
          <h2>
            {' '}
            <span>{t('title3/1')}</span> <span>{t('title3/2')}</span>{' '}
            <span>{t('title3/3')}</span>{' '}
          </h2>
        </div>
      </div>
      <div className="third_period">
        <div className="page1">
          <div className="left_side2">
            <p>{t('t47')}</p>
            <p className="high_margin_top">{t('t48')}</p>
            <p className="high_margin_top">{t('t49')}</p>
            <p className="mid_margin_top">{t('t50')}</p>
          </div>
          <div className="right_side2">
            <div className="img">
              <img src={Lecture} alt="" />
              <div className="caption">
                {t('cap21')}
      
              </div>
            </div>
            <p className="half_mid_margin_top">{t('t51')}</p>
            <div className="extra_img">
              <img className="mid_margin_top" src={Man} alt="" />
            </div>
          </div>
        </div>
        <div className="page1">
          <div className="left_side2">
            <div className="img">
              <img src={Oleksa} alt="" />
              <p className="caption">{t('cap22')}</p>
            </div>
            <p className="half_mid_margin_top">{t('t52')}</p>
            <div className="img low_margin_top">
              <img src={Dora} alt="" />
              <p className="caption">{t('cap23')}</p>
            </div>
            <p className="low_margin_top">{t('t53')}</p>
            <p className="low_margin_top margin_left">{t('t54')}</p>
          </div>
          <div className="right_side2">
            <p>{t('t55')}</p>
            <div className="img half_mid_margin_top">
              <img src={Virgin} alt="" />
              <p className="caption">
              {t('cap24')}
              </p>
            </div>
            <p className="half_mid_margin_top">{t('t56')}</p>
          </div>
        </div>

        <div className="page">
          <div className="left_side">
            <div className="img">
              <img src={Secret} alt="" />
              <p className="caption">{t('cap25')}</p>
            </div>
            <p className="mid_margin_top">{t('t57')}</p>
            <p className="high_margin_top">{t('t58')}</p>
          </div>
          <div className="right_side">
            <p>{t('t59')}</p>
            <div className="img low_margin_top">
              <img src={Girl} alt="" />
              <p className="caption">
              {t('cap26')}
              </p>
            </div>
            <p className="mid_margin_top">{t('t60')}</p>
          </div>
        </div>

        <div className="page">
          <div className="left_side1">
            <div className="img extra_hide_margin_top">
              <img src={Female} alt="" />
              <p className="caption">
              {t('cap27')}
              </p>
            </div>
            <div className="img extra_big_margin_top">
              <img src={Holubovska} alt="" />
              <p className="caption">
              {t('cap28')}
                
              </p>
            </div>
          </div>
          <div className="right_side1 ">
            <div className="img mid_margin_top ">
              <img src={Metropolit} alt="" />
              <p className="caption">{t('cap29')}</p>
            </div>
            <p className="high_margin_top">{t('t61')}</p>
          </div>
        </div>

        <div className="extra_page">
          <div className="left_side high_margin_top">
            <p>{t('t62')}</p>
            <p className="low_margin_top">{t('t63')}</p>
          </div>
          <div className="right_side">
            <p className="half_mid_margin_top">{t('t64')}</p>
            <div className="img mid_margin_top">
              <img src={Exhibition} alt="" />
              <p className="half_mid_margin_top">{t('t65')}</p>
            </div>
          </div>
        </div>

        <div className="page">
          <div className="left_side0">
            <p>{t('t66')}</p>
            <div className="img high_margin_top">
              <img src={Ukraine} alt="" />
              <p className="caption">{t('cap30')}</p>
            </div>
          </div>
          <div className="right_side0">
            <p className="high_margin_top">{t('t67')}</p>
          </div>
        </div>

        <div className="extra_page">
          <div className="left_side0">
            <div className="img">
              <img src={Book} alt="" />
            </div>
            <p className="mid_margin_top">{t('t68')}</p>
            <p className="low_margin_top">{t('t69')}</p>
          </div>
          <div className="right_side0">
            <p className="extra_margin_top">{t('t70')}</p>
            <div className="img extra_margin_top">
              <img src={Monograph} alt="" />
              <p className="caption">
              {t('cap31')}
              </p>
            </div>
            <p className="low_margin_top">{t('t71')}</p>
          </div>
        </div>
      </div>

      <div className="title">
        <div className="main_title show_up element-animation extra_tit_hide_margin_top">
          <h2>
            {' '}
            <span>{t("title4/1")} </span> <span>{t("title4/2")} </span>{' '}
            <span>{t("title4/3")}</span>{' '}
          </h2>
        </div>
      </div>

      <div className="fourth_period">
        <div className="page1">
          <div className="left_side2">
            <p className="mid_margin_top">{t('t72')}</p>
            <div className="img mid_margin_top">
              <img src={Pictures} alt="" />
            </div>
            <p className="half_mid_margin_top">{t('t73')}</p>
            <p className="mid_margin_top">{t('t74')}</p>
          </div>
          <div className="right_side2">
            <div className="img">
              <img src={Statuya} alt="" />
            </div>
            <p className="half_mid_margin_top">{t('t75')}</p>
            <div className="img low_margin_top">
              <img src={Sons} alt="" />
              <p className="caption">
              {t('cap32')}
                
              </p>
            </div>
          </div>
        </div>
        <div className="page3">
          <div className="left_side3">
            <p>{t('t76')}</p>
            <div className="img">
              <img src={Society} alt="" />
              <p className="caption">
              {t('cap33')}
              </p>
            </div>
            <p className="extra_margin_top">{t('t77')}</p>
            <p className="high_margin_top">{t('t78')}</p>
            <p className="extra_margin_top">{t('t79')}</p>
            <p className="mid_margin_top">{t('t80')}</p>
            <p className="mid_margin_top">{t('t81')}</p>
            <p className="mid_margin_top">{t('t82')}</p>
          </div>

          <div className="right_side3">
            <p>{t('t83')}</p>
            <p className="mid_margin_top">{t('t84')}</p>
            <p className="extra_margin_top">{t('t85')}</p>
            <p className="high_margin_top">{t('t86')}</p>
            <p className="mid_margin_top">{t('t87')}</p>
            <p className="mid_margin_top">{t('t88')}</p>
            <p className="extra_margin_top"></p>
          </div>
        </div>
      </div>
      <div style={{ height: 1000 }}></div>
    </div>
  );
}

export default MapRoad;
