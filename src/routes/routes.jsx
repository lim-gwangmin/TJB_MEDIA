import { lazy } from 'react';

import URL from '@routes/url';

const OnBoarding = lazy(() => import('@pages/onBoarding/OnBoarding'));
const Home = lazy(() => import('@pages/home/Home'));
const Login = lazy(() => import('@pages/login/Login'));
const Agreement = lazy(() => import('@pages/sign/Agreement'));
const AgreementDetail = lazy(() => import('@pages/sign/AgreementDetail'));
const PhoneVerification = lazy(() => import('@pages/sign/PhoneVerification'));
const UserInfo = lazy(() => import('@pages/sign/UserInfo'));
const UserRecovery = lazy(() => import('@pages/login/UserRecovery'));
const FindIdResult = lazy(() => import('@pages/login/FindIdResult'));
const ChangePassword = lazy(() => import('@pages/login/ChangePassword'));
const MyPage = lazy(() => import('@pages/myPage/MyPage'));
const Points = lazy(() => import('@pages/myPage/Points'));
const Ranking = lazy(() => import('@pages/myPage/Ranking'));
const Mystamp = lazy(() => import('@pages/myPage/Mystamp'));
const Shop = lazy(() => import('@pages/shop/Shop'));
const ProductDetail = lazy(() => import('@pages/shop/ProductDetail'));
const QuizHome = lazy(() => import('@pages/quiz/QuizHome'));
const QuizCategory = lazy(() => import('@pages/quiz/QuizCategory'));
const QuizGame = lazy(() => import('@pages/quiz/QuizGame'));
const QuizResult = lazy(() => import('@pages/quiz/QuizResult'));
const Settings = lazy(() => import('@pages/setting/Settings'));
const EditInfo = lazy(() => import('@pages/myPage/EditInfo'));
const Introduction = lazy(() => import('@pages/introduction/Introduction'));
const InquiryForm = lazy(() => import('@pages/Contact/InquiryForm'));
const InquiryHistory = lazy(() => import('@pages/Contact/InquiryHistory'));
const UserDeletion = lazy(() => import('@pages/setting/UserDeletion'));
const Error = lazy(() => import('@pages/error/Error'));
const NotFound = lazy(() => import('@pages/error/NotFound'));

const routes = [
  { path: URL.ON_BOARDING, element: <OnBoarding />, private: false },
  { path: URL.HOME, element: <Home />, private: true },
  { path: URL.LOGIN, element: <Login />, private: false },
  { path: URL.AGREEMENT, element: <Agreement />, private: false },
  { path: URL.AGREEMENT_DETAIL, element: <AgreementDetail />, private: false },
  { path: URL.PHONE_VERIFICATION, element: <PhoneVerification />, private: false },
  { path: URL.USER_INFO, element: <UserInfo />, private: false },
  { path: URL.USER_RECOVERY_ID, element: <UserRecovery />, private: false },
  { path: URL.USER_RECOVERY_PASSWORD, element: <UserRecovery />, private: false },
  { path: URL.FIND_ID_RESULT, element: <FindIdResult />, private: false },
  { path: URL.CHANGE_PASSWORD, element: <ChangePassword />, private: false },
  { path: URL.MY_PAGE, element: <MyPage />, private: true },
  { path: URL.POINTS, element: <Points />, private: true },
  { path: URL.MY_STAMP, element: <Mystamp />, private: true },
  { path: URL.RANKING, element: <Ranking />, private: true },
  { path: URL.SHOP, element: <Shop />, private: true },
  { path: URL.PRODUCT_DETAIL, element: <ProductDetail />, private: true },
  { path: URL.QUIZ_HOME, element: <QuizHome />, private: true },
  { path: URL.QUIZ_CATEGORY, element: <QuizCategory />, private: true },
  { path: URL.QUIZ_GAME, element: <QuizGame />, private: true },
  { path: URL.QUIZ_RESULT, element: <QuizResult />, private: true },
  { path: URL.SETTINGS, element: <Settings />, private: true },
  { path: URL.EDIT_INFO, element: <EditInfo />, private: true },
  { path: URL.INQUIRY_FORM, element: <InquiryForm />, private: true },
  { path: URL.INQUIRY_HISTORY, element: <InquiryHistory />, private: true },
  { path: URL.INTRODUCTION, element: <Introduction />, private: true },
  { path: URL.USER_DELETION, element: <UserDeletion />, private: true },
  { path: URL.ERROR, element: <Error />, private: false },
  { path: URL.NOT_FOUND, element: <NotFound />, private: false },
];

export default routes;
