import { useNavigate } from 'react-router-dom';

import { navLinks } from '@routes/navLinks';
import { HOME, LOGIN, USER_RECOVERY_PASSWORD } from '@routes/url';

const useCustomNavigate = () => {
  const navigate = useNavigate();

  const goToPage = (path, options = {}) => {
    navigate(path, { state: options });
  };

  const goToHome = () => {
    navigate(navLinks[HOME].path);
  };

  const goToFindPassword = () => {
    navigate(navLinks[USER_RECOVERY_PASSWORD].path, navLinks[USER_RECOVERY_PASSWORD].options);
  };

  const goToLogin = () => {
    navigate(navLinks[LOGIN].path);
  };

  const goBack = () => {
    navigate(-1);
  };

  return { goToPage, goToHome, goToLogin, goBack, goToFindPassword };
};

export default useCustomNavigate;
