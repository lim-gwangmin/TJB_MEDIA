import React, { useEffect, useState } from 'react';

import { AgreementService } from '@services/agreementService';

import { SubmitLoader } from '@components/atoms/Loader';
import { SettingsTemplate } from '@components/templates/Setting';

import { useLoading } from '@hooks/useLoading';

export default function Settings() {
  const [isAgreementLoading, setFetchAgreement] = useLoading(AgreementService.agreement);
  const [agreementList, setAgreementList] = useState([]);

  useEffect(() => {
    fetchAgreementData();
  }, []);

  const fetchAgreementData = async () => {
    if (isAgreementLoading) return;
    try {
      const response = await setFetchAgreement();
      setAgreementList(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <SettingsTemplate agreementList={agreementList} />
      {isAgreementLoading && <SubmitLoader />}
    </>
  );
}
