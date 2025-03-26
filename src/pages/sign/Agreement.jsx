import React, { useEffect, useState } from 'react';

import { AgreementService } from '@services/agreementService';

import { SubmitLoader } from '@components/atoms/Loader';
import { AgreementTemplate } from '@components/templates/Sign';

import { useLoading } from '@hooks/useLoading';

export default function Agreement() {
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
      <AgreementTemplate agreementList={agreementList} />
      {isAgreementLoading && <SubmitLoader />}
    </>
  );
}
