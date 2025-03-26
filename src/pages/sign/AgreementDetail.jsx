import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { AgreementService } from '@services/agreementService';

import { SubmitLoader } from '@components/atoms/Loader';
import { AgreementDetailTemplate } from '@components/templates/Sign';

import { useLoading } from '@hooks/useLoading';

import Error from '@pages/error/Error';

export default function AgreementDetail({}) {
  const { agreementCd = '' } = useParams();
  const [isAgreementLoading, setFetchAgreement] = useLoading(AgreementService.agreementDetail);
  const [agreementData, setAgreementData] = useState({});

  useEffect(() => {
    fetchAgreementData();
  }, [agreementCd]);

  const fetchAgreementData = useCallback(async () => {
    try {
      if (isAgreementLoading) return;

      const response = await setFetchAgreement({ agreementCd });
      setAgreementData(response);
    } catch (error) {
      console.log.error(error);
    }
  }, [agreementCd]);

  return (
    <>
      {agreementCd ? <AgreementDetailTemplate agreementData={agreementData} /> : <Error />}
      {isAgreementLoading && <SubmitLoader />}
    </>
  );
}
