import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  appBar: {
    "& .css-6hp17o-MuiList-root-MuiMenu-list": {
      paddingBottom: "0px",
      paddingTop: "0px",
    },
    backgroundRepeat: "no-repeat !important",
    height: "200px",
    "@media (max-width:320px)": {
      paddingRight: "0px !important",
    },
    "@media (max-width:500px)": {
      background: "url(navbar-mobile1.png)",
      height: "120px",
    },
    "@media (min-width:500px) and (max-width:700px)": {
      background: "url(navbar-mobile2.png)",
      height: "120px",
    },
    "@media (min-width:700px) and (max-width:800px)": {
      background: "url(navbar-mobile3.png)",
      height: "130px",
    },
    "@media (min-width:800px) and (max-width:900px)": {
      background: "url(navbar-mobile4.png)",
      height: "140px",
    },
    "@media (min-width:900px) and (max-width:955px)": {
      background: "url(navbar-4.png)",
    },
    "@media (min-width:955px) and (max-width:1008px)": {
      background: "url(navbar-3.png)",
    },
    "@media (min-width:1008px) and (max-width:1030px)": {
      background: "url(navbar-5.png)",
    },
    "@media (min-width:1030px) and (max-width:1100px)": {
      background: "url(navbar-2.png)",
    },
    "@media (min-width:1100px) and (max-width:1160px)": {
      background: "url(navbar-6.png)",
    },
    "@media (min-width:1160px) and (max-width:1200px)": {
      background: "url(navbar-7.png)",
    },
    "@media (min-width:1200px) and (max-width:1260px)": {
      background: "url(navbar-8.png)",
    },
    "@media (min-width:1260px) and (max-width:1360px)": {
      background: "url(navbar-9.png)",
    },
    "@media (min-width:1360px) and (max-width:1460px)": {
      background: "url(navbar-10.png)",
    },
    "@media (min-width:1460px) and (max-width:1560px)": {
      background: "url(navbar-11.png)",
    },
    "@media (min-width:1560px) and (max-width:1660px)": {
      background: "url(navbar-12.png)",
    },
    "@media (min-width:1660px) and (max-width:1765px)": {
      background: "url(navbar-13.png)",
    },
    "@media (min-width:1765px) and (max-width:1918px)": {
      background: "url(navbar-1.png)",
    },
    "@media (min-width:1918px) and (max-width:2020px)": {
      background: "url(navbar-14.png)",
    },
    "@media (min-width:2020px) and (max-width:2140px)": {
      background: "url(navbar-15.png)",
    },
    "@media (min-width:2140px) and (max-width:2240px)": {
      background: "url(navbar-16.png)",
    },
    "@media (min-width:2240px) and (max-width:2350px)": {
      background: "url(navbar-17.png)",
    },
    "@media (min-width:2350px) and (max-width:2500px)": {
      background: "url(navbar-18.png)",
    },
    "@media (min-width:2500px) and (max-width:2650px)": {
      background: "url(navbar-19.png)",
      height: "250px",
    },
    "@media (min-width:2650px) and (max-width:2800px)": {
      background: "url(navbar-20.png)",
      height: "270px",
    },
    "@media (min-width:2800px) and (max-width:3000px)": {
      background: "url(navbar-21.png)",
      height: "290px",
    },
    "@media (min-width:3000px) and (max-width:3150px)": {
      background: "url(navbar-22.png)",
      height: "317px",
    },
    "@media (min-width:3150px) and (max-width:3350px)": {
      background: "url(navbar-23.png)",
      height: "330px",
    },
    "@media (min-width:3350px) and (max-width:3440px)": {
      background: "url(navbar-24.png)",
      height: "340px",
    },
    "@media (min-width:3440px) and (max-width:3540px)": {
      background: "url(navbar-25.png)",
      height: "3670px",
    },
    "@media (min-width:3540px) and (max-width:3640px)": {
      background: "url(navbar-26.png)",
      height: "360px",
    },
    "@media (min-width:3640px) and (max-width:3840px)": {
      background: "url(navbar-27.png)",
      height: "360px",
    },
    "@media (min-width:3841px)": {
      backgroundColor: "rgb( 228, 192, 77 )",
      height: "150px",
    },
  },
  links: {
    color: "black",
    "&:hover": {
      color: "rgb( 1, 155, 253 )",
    },
  },

  linksHome: {
    marginLeft: "15px",
    color: "black !important",
    "&:hover": {
      color: "rgb( 1, 155, 253 ) !important",
    },
    "@media (min-width:1765px) and (max-width:2020px)": {
      marginLeft: "130px",
    },
    "@media (min-width:2020px) and (max-width:3000px)": {
      marginLeft: "130px",
    },
    "@media (min-width:950px) and (max-width:955px)": {
      marginLeft: "12px",
    },
    "@media (min-width:1267px) and (max-width:1545px)": {
      marginLeft: "60px",
    },
    "@media (min-width:1560px) and (max-width:1765px)": {
      marginLeft: "90px",
    },
    "@media (min-width:1765px) and (max-width:1918px)": {
      marginLeft: "120px",
    },
  },

  productLink: {
    color: "black !important",
    "@media (min-width:900px) and (max-width:950px)": {
      fontSize: "0.7rem !important",
    },
    "@media (min-width:950px) and (max-width:1008px)": {
      fontSize: "0.8rem !important",
    },
    "@media (min-width:1008px) and (max-width:1100px)": {
      fontSize: "0.85rem !important",
    },
    "@media (min-width:1100px) and (max-width:1360px)": {
      fontSize: "0.9rem !important",
    },
    "@media (min-width:1360px) and (max-width:1660px)": {
      fontSize: "1.2rem !important",
    },
    "@media (min-width:1660px) and (max-width:1765px)": {
      fontSize: "1.3rem !important",
    },
    "@media (min-width:1765px) and (max-width:2020px)": {
      fontSize: "1.4rem !important",
    },
    "@media (min-width:2020px) and (max-width:2240px)": {
      fontSize: "1.5rem !important",
    },
    "@media (min-width:2240px) and (max-width:2500px)": {
      fontSize: "1.7rem !important",
    },
    "@media (min-width:2500px) and (max-width:3000px)": {
      fontSize: "2rem !important",
    },

    "&:hover": {
      backgroundColor: "transparent !imortant",
      color: "rgb( 1, 155, 253 ) !important",
    },
  },

  signInLink: {
    color: "white !important",
    /**Mobile version **/
    "@media (max-width:899px)": {
      backgroundColor: "#ffc107",
      padding: "8px",
      clipPath: "polygon(6% 8%, 100% 0, 96% 100%, 0% 100%)",
    },
    "&:hover": {
      textDecoration: "underline",
    },
    "@media (min-width:900px) and (max-width:907px)": {
      marginLeft: "70px",
    },
    "@media (min-width:907px) and (max-width:915px)": {
      marginLeft: "62px",
    },
    "@media (min-width:915px) and (max-width:922px)": {
      marginLeft: "55px",
    },
    "@media (min-width:922px) and (max-width:932px)": {
      marginLeft: "49px",
    },
    "@media (min-width:932px) and (max-width:938px)": {
      marginLeft: "42px",
    },
    "@media (min-width:938px) and (max-width:943px)": {
      marginLeft: "38px",
    },
    "@media (min-width:943px) and (max-width:950px)": {
      marginLeft: "35px",
    },
    "@media (min-width:950px) and (max-width:955px)": {
      marginLeft: "28px",
    },
    "@media (min-width:955px) and (max-width:962px)": {
      marginLeft: "65px",
    },

    "@media (min-width:962px) and (max-width:973px)": {
      marginLeft: "60px",
    },
    "@media (min-width:973px) and (max-width:985px)": {
      marginLeft: "53px",
    },
    "@media (min-width:985px) and (max-width:995px)": {
      marginLeft: "42px",
    },
    "@media (min-width:995px) and (max-width:1008px)": {
      marginLeft: "33px",
    },
    "@media (min-width:1008px) and (max-width:1016px)": {
      marginLeft: "40px",
    },
    "@media (min-width:1016px) and (max-width:1025px)": {
      marginLeft: "32px",
    },
    "@media (min-width:1025px) and (max-width:1030px)": {
      marginLeft: "25px",
    },
    "@media (min-width:1030px) and (max-width:1043px)": {
      marginLeft: "75px",
    },
    "@media (min-width:1043px) and (max-width:1055px)": {
      marginLeft: "70px",
    },
    "@media (min-width:1055px) and (max-width:1068px)": {
      marginLeft: "60px",
    },
    "@media (min-width:1068px) and (max-width:1075px)": {
      marginLeft: "49px",
    },
    "@media (min-width:1075px) and (max-width:1090px)": {
      marginLeft: "42px",
    },
    "@media (min-width:1090px) and (max-width:1100px)": {
      marginLeft: "30px",
    },
    "@media (min-width:1100px) and (max-width:1107px)": {
      marginLeft: "72px",
    },
    "@media (min-width:1107px) and (max-width:1111px)": {
      marginLeft: "65px",
    },
    "@media (min-width:1111px) and (max-width:1114px)": {
      marginLeft: "60px",
    },
    "@media (min-width:1114px) and (max-width:1120px)": {
      marginLeft: "60px",
    },
    "@media (min-width:1120px) and (max-width:1127px)": {
      marginLeft: "55px",
    },
    "@media (min-width:1127px) and (max-width:1135px)": {
      marginLeft: "50px",
    },
    "@media (min-width:1135px) and (max-width:1142px)": {
      marginLeft: "40px",
    },
    "@media (min-width:1142px) and (max-width:1150px)": {
      marginLeft: "35px",
    },
    "@media (min-width:1150px) and (max-width:1155px)": {
      marginLeft: "27px",
    },
    "@media (min-width:1155px) and (max-width:1160px)": {
      marginLeft: "23px",
    },
    "@media (min-width:1160px) and (max-width:1170px)": {
      marginLeft: "50px",
    },
    "@media (min-width:1170px) and (max-width:1180px)": {
      marginLeft: "45px",
    },
    "@media (min-width:1180px) and (max-width:1190px)": {
      marginLeft: "36px",
    },
    "@media (min-width:1190px) and (max-width:1200px)": {
      marginLeft: "28px",
    },
    "@media (min-width:1200px) and (max-width:1215px)": {
      marginLeft: "70px",
    },
    "@media (min-width:1215px) and (max-width:1225px)": {
      marginLeft: "57px",
    },
    "@media (min-width:1225px) and (max-width:1235px)": {
      marginLeft: "48px",
    },
    "@media (min-width:1235px) and (max-width:1245px)": {
      marginLeft: "37px",
    },
    "@media (min-width:1245px) and (max-width:1255px)": {
      marginLeft: "30px",
    },
    "@media (min-width:1255px) and (max-width:1260px)": {
      marginLeft: "22px",
    },
    "@media (min-width:1260px) and (max-width:1267px)": {
      marginLeft: "97px",
    },
    "@media (min-width:1267px) and (max-width:1275px)": {
      marginLeft: "94px",
    },
    "@media (min-width:1275px) and (max-width:1285px)": {
      marginLeft: "90px",
    },
    "@media (min-width:1285px) and (max-width:1292px)": {
      marginLeft: "82px",
    },
    "@media (min-width:1292px) and (max-width:1300px)": {
      marginLeft: "75px",
    },
    "@media (min-width:1300px) and (max-width:1310px)": {
      marginLeft: "69px",
    },
    "@media (min-width:1310px) and (max-width:1320px)": {
      marginLeft: "62px",
    },
    "@media (min-width:1320px) and (max-width:1330px)": {
      marginLeft: "52px",
    },
    "@media (min-width:1330px) and (max-width:1340px)": {
      marginLeft: "42px",
    },
    "@media (min-width:1340px) and (max-width:1350px)": {
      marginLeft: "33px",
    },
    "@media (min-width:1350px) and (max-width:1360px)": {
      marginLeft: "28px",
    },
    "@media (min-width:1360px) and (max-width:1377px)": {
      marginLeft: "100px",
    },
    "@media (min-width:1377px) and (max-width:1390px)": {
      marginLeft: "87px",
    },
    "@media (min-width:1390px) and (max-width:1410px)": {
      marginLeft: "75px",
    },
    "@media (min-width:1410px) and (max-width:1420px)": {
      marginLeft: "57px",
    },
    "@media (min-width:1420px) and (max-width:1432px)": {
      marginLeft: "49px",
    },
    "@media (min-width:1432px) and (max-width:1445px)": {
      marginLeft: "40px",
    },
    "@media (min-width:1445px) and (max-width:1460px)": {
      marginLeft: "29px",
    },
    "@media (min-width:1460px) and (max-width:1470px)": {
      marginLeft: "100px",
    },
    "@media (min-width:1470px) and (max-width:1480px)": {
      marginLeft: "93px",
    },
    "@media (min-width:1480px) and (max-width:1490px)": {
      marginLeft: "82px",
    },
    "@media (min-width:1490px) and (max-width:1500px)": {
      marginLeft: "75px",
    },
    "@media (min-width:1500px) and (max-width:1510px)": {
      marginLeft: "65px",
    },
    "@media (min-width:1510px) and (max-width:1520px)": {
      marginLeft: "60px",
    },
    "@media (min-width:1520px) and (max-width:1535px)": {
      marginLeft: "50px",
    },
    "@media (min-width:1535px) and (max-width:1545px)": {
      marginLeft: "38px",
    },
    "@media (min-width:1545px) and (max-width:1560px)": {
      marginLeft: "30px",
    },
    "@media (min-width:1560px) and (max-width:1580px)": {
      marginLeft: "100px",
    },
    "@media (min-width:1580px) and (max-width:1600px)": {
      marginLeft: "82px",
    },
    "@media (min-width:1600px) and (max-width:1620px)": {
      marginLeft: "62px",
    },
    "@media (min-width:1620px) and (max-width:1640px)": {
      marginLeft: "49px",
    },
    "@media (min-width:1640px) and (max-width:1660px)": {
      marginLeft: "33px",
    },
    "@media (min-width:1660px) and (max-width:1680px)": {
      marginLeft: "105px",
    },
    "@media (min-width:1680px) and (max-width:1700px)": {
      marginLeft: "82px",
    },
    "@media (min-width:1700px) and (max-width:1720px)": {
      marginLeft: "67px",
    },
    "@media (min-width:1720px) and (max-width:1740px)": {
      marginLeft: "50px",
    },
    "@media (min-width:1740px) and (max-width:1757px)": {
      marginLeft: "35px",
    },
    "@media (min-width:1757px) and (max-width:1765px)": {
      marginLeft: "28px",
    },
    "@media (min-width:1765px) and (max-width:1785px)": {
      marginLeft: "145px",
    },
    "@media (min-width:1785px) and (max-width:1800px)": {
      marginLeft: "127px",
    },
    "@media (min-width:1800px) and (max-width:1815px)": {
      marginLeft: "115px",
    },
    "@media (min-width:1815px) and (max-width:1830px)": {
      marginLeft: "98px",
    },
    "@media (min-width:1830px) and (max-width:1845px)": {
      marginLeft: "88px",
    },
    "@media (min-width:1845px) and (max-width:1860px)": {
      marginLeft: "75px",
    },
    "@media (min-width:1860px) and (max-width:1870px)": {
      marginLeft: "65px",
    },
    "@media (min-width:1870px) and (max-width:1885px)": {
      marginLeft: "55px",
    },
    "@media (min-width:1885px) and (max-width:1900px)": {
      marginLeft: "42px",
    },
    "@media (min-width:1900px) and (max-width:1918px)": {
      marginLeft: "30px",
    },
    "@media (min-width:1918px) and (max-width:1940px)": {
      marginLeft: "100px",
    },
    "@media (min-width:1940px) and (max-width:1960px)": {
      marginLeft: "78px",
    },
    "@media (min-width:1960px) and (max-width:1980px)": {
      marginLeft: "62px",
    },
    "@media (min-width:1980px) and (max-width:2000px)": {
      marginLeft: "45px",
    },
    "@media (min-width:2000px) and (max-width:2020px)": {
      marginLeft: "30px",
    },
    "@media (min-width:2020px) and (max-width:2040px)": {
      marginLeft: "108px",
    },
    "@media (min-width:2040px) and (max-width:2065px)": {
      marginLeft: "90px",
    },
    "@media (min-width:2065px) and (max-width:2085px)": {
      marginLeft: "70px",
    },
    "@media (min-width:2085px) and (max-width:2100px)": {
      marginLeft: "52px",
    },
    "@media (min-width:2100px) and (max-width:2120px)": {
      marginLeft: "40px",
    },
    "@media (min-width:2120px) and (max-width:2140px)": {
      marginLeft: "100px",
    },
    "@media (min-width:2140px) and (max-width:2180px)": {
      marginLeft: "85px",
    },
    "@media (min-width:2180px) and (max-width:2200px)": {
      marginLeft: "55px",
    },
    "@media (min-width:2200px) and (max-width:2240px)": {
      marginLeft: "32px",
    },
    "@media (min-width:2240px) and (max-width:2320px)": {
      marginLeft: "50px",
    },
    "@media (min-width:2320px) and (max-width:2350px)": {
      marginLeft: "30px",
    },
    "@media (min-width:2350px) and (max-width:2410px)": {
      marginLeft: "120px",
    },
    "@media (min-width:2410px) and (max-width:2460px)": {
      marginLeft: "80px",
    },
    "@media (min-width:2460px) and (max-width:2500px)": {
      marginLeft: "40px",
    },
    "@media (min-width:2500px) and (max-width:2570px)": {
      marginLeft: "140px",
    },
    "@media (min-width:2570px) and (max-width:2620px)": {
      marginLeft: "90px",
    },
    "@media (min-width:2620px) and (max-width:2650px)": {
      marginLeft: "60px",
    },
    "@media (min-width:2650px) and (max-width:2720px)": {
      marginLeft: "120px",
    },
    "@media (min-width:2720px) and (max-width:2800px)": {
      marginLeft: "62px",
    },
    "@media (min-width:2800px) and (max-width:2870px)": {
      marginLeft: "160px",
    },
    "@media (min-width:2870px) and (max-width:3950px)": {
      marginLeft: "95px",
    },
    "@media (min-width:2950px) and (max-width:3000px)": {
      marginLeft: "60px",
    },

  },

  /**** ROUTES ****/
  linksBox: {
    flexGrow: 1,
    "@media (min-width:900px) and (max-width:950px)": {
      fontSize: "0.7rem !important",
    },
    "@media (min-width:950px) and (max-width:1008px)": {
      marginTop: "8px",
      fontSize: "0.8rem !important",
    },
    "@media (min-width:1008px) and (max-width:1030px)": {
      marginTop: "10px !important",
      fontSize: "0.85rem !important",
    },
    "@media (min-width:1030px) and (max-width:1100px)": {
      fontSize: "0.85rem !important",
      marginTop: "10px !important",
    },
    "@media (min-width:1100px) and (max-width:1160px)": {
      marginTop: "22px !important",
      fontSize: "0.9rem !important",
    },
    "@media (min-width:1160px) and (max-width:1200px)": {
      marginTop: "20px !important",
      fontSize: "0.9rem !important",
    },
    "@media (min-width:1200px) and (max-width:1260px)": {
      marginTop: "25px !important",
      fontSize: "0.9rem !important",
    },
    "@media (min-width:1260px) and (max-width:1360px)": {
      marginTop: "30px !important",
      fontSize: "0.9rem !important",
    },
    "@media (min-width:1360px) and (max-width:1560px)": {
      fontSize: "1.2rem !important",
      marginTop: "35px !important",
    },
    "@media (min-width:1560px) and (max-width:1660px)": {
      marginTop: "40px !important",
      fontSize: "1.2rem !important",
    },
    "@media (min-width:1660px) and (max-width:1765px)": {
      marginTop: "45px !important",
      fontSize: "1.3rem !important",
    },
    "@media (min-width:1765px) and (max-width:1918px)": {
      fontSize: "1.4rem !important",
      marginTop: "55px !important",
    },
    "@media (min-width:1918px) and (max-width:2020px)": {
      fontSize: "1.4rem !important",
      marginTop: "54px !important",
    },
    "@media (min-width:2020px) and (max-width:2140px)": {
      fontSize: "1.5rem !important",
      marginTop: "54px !important",
    },
    "@media (min-width:2140px) and (max-width:2240px)": {
      fontSize: "1.5rem !important",
      marginTop: "54px !important",
    },
    "@media (min-width:2240px) and (max-width:2500px)": {
      fontSize: "1.7rem !important",
      marginTop: "54px !important",
    },
    "@media (min-width:2500px) and (max-width:2650px)": {
      fontSize: "2rem !important",
      marginTop: "75px !important",
    },
    "@media (min-width:2650px) and (max-width:2800px)": {
      fontSize: "2rem !important",
      marginTop: "75px !important",
    },    
    "@media (min-width:2800px) and (max-width:3000px)": {
      fontSize: "2rem !important",
      marginTop: "75px !important",
    },

    /**** */

    "@media (min-width:3000px) and (max-width:3150px)": {
      marginLeft: "900px",
      marginTop: "85px",
    },
    "@media (min-width:3150px) and (max-width:3350px)": {
      marginLeft: "1000px",
      marginTop: "90px",
    },
    "@media (min-width:3350px) and (max-width:3440px)": {
      fontSize: "2.4rem",
      marginLeft: "1000px",
      marginTop: "95px",
    },
    "@media (min-width:3440px) and (max-width:3540px)": {
      fontSize: "2.4rem",
      marginLeft: "1000px",
      marginTop: "95px",
    },
    "@media (min-width:3540px) and (max-width:3640px)": {
      fontSize: "2.6rem",
      marginLeft: "1200px",
      marginTop: "105px",
    },
    "@media (min-width:3640px) and (max-width:3840px)": {
      fontSize: "2.8rem",
      marginLeft: "1200px",
      marginTop: "105px",
    },
    "@media (min-width:3841px)": {
      fontSize: "2.8rem",
      marginLeft: "1200px",
      marginTop: "35px",
    },
  },

  /**** AUTHENTIFICATION ****/
  signInBox: {
    flexGrow: 1,
    "@media (min-width:900px) and (max-width:950px)": {
      marginTop: "10px !important",
      fontSize: "0.6rem",
    },
    "@media (min-width:950px) and (max-width:1008px)": {
      marginTop: "13px !important",
      fontSize: "0.6rem",
    },
    "@media (min-width:1008px) and (max-width:1100px)": {
      marginTop: "22px !important",
      fontSize: "0.65rem !important",
    },
    "@media (min-width:1100px) and (max-width:1200px)": {
      marginTop: "30px !important",
      fontSize: "0.75rem",
    },
    "@media (min-width:1200px) and (max-width:1260px) ": {
      marginTop: "36px !important",
      fontSize: "0.8rem",
    },
    "@media (min-width:1260px) and (max-width:1360px)": {
      marginTop: "40px !important",
      fontSize: "0.9rem !important",
    },
    "@media (min-width:1360px) and (max-width:1460px)": {
      marginTop: "43px !important",
      fontSize: "0.9rem !important",
    },
    "@media (min-width:1460px) and (max-width:1560px)": {
      marginTop: "43px !important",
      fontSize: "1rem !important",
    },
    "@media (min-width:1560px) and (max-width:1660px)": {
      marginTop: "50px !important",
      fontSize: "1rem !important",
    },
    "@media (min-width:1660px) and (max-width:1765px)": {
      marginTop: "50px !important",
      fontSize: "1.1rem !important",
    },
    "@media (min-width:1765px) and (max-width:1918px)": {
      fontSize: "1.2rem !important",
      marginTop: "55px !important",
    },
    "@media (min-width:1918px) and (max-width:2020px)": {
      fontSize: "1.2rem !important",
      marginTop: "60px !important",
    },
    "@media (min-width:2020px) and (max-width:2140px)": {
      marginTop: "65px !important",
      fontSize: "1.3rem !important",
    },
    "@media (min-width:2140px) and (max-width:2240px)": {
      marginTop: "65px !important",
      fontSize: "1.3rem !important",
    },
    "@media (min-width:2240px) and (max-width:2500px)": {
      marginTop: "72px !important",
      fontSize: "1.3rem !important",
    },
    "@media (min-width:2500px) and (max-width:2800px)": {
      marginTop: "80px !important",
      fontSize: "1.4rem !important",
    },
    "@media (min-width:2800px) and (max-width:3000px)": {
      marginTop: "90px !important",
      fontSize: "1.5rem !important",
    },

  },

  menuIcon: {
    color: "#FFFFFF !important",
  },
}));
