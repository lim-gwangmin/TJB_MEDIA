import React, { useCallback, useEffect, useState } from 'react';

import { POINT_TAB_DATA } from '@constant';
import { USER_DATA_SCHEMA } from '@schema';
import { POINT_SERVICE_SCHEMA } from '@schema';
import { PointService } from '@services/pointService';

import userThumnail from '@assets/images/bee_image.svg';

import { Box } from '@components/atoms/Box';
import { WindowInfinityScrollContainer } from '@components/atoms/Layout';
import { Main } from '@components/atoms/Layout';
import { UserCard } from '@components/molecules/Card';
import { SectionContainer } from '@components/molecules/Layout';
import { Header } from '@components/organisms/Header';
import { TabPointList } from '@components/organisms/Tab';

import { useLoading } from '@hooks/useLoading';

import { colors } from '@styles/theme';

import { nextMonth, prevMonth } from '@utils/dateNavigator';

const THEMA_COLOR = colors.primary[700];
const POINT_BOX_COLOR = colors.secondary[600];

export default function PointsTemplate({ userData = {} }) {
  const { userNm, schoolNm, grade, point, accruedPoint } = {
    ...USER_DATA_SCHEMA,
    ...userData,
  };
  const [isLoading, fetchPointData] = useLoading(PointService.pointList); // 포인트 사용 이력API
  const [pointSchema, setPointSchema] = useState(POINT_SERVICE_SCHEMA); // 포인트 사용 이력 request값
  const [pagination, setPagination] = useState({});
  const [pointData, setPointData] = useState({});

  // 포인트 사용 이력 조회를 위한 훅
  useEffect(() => {
    getweekRankFetchData();
  }, [pointSchema]);

  // 포인트 사용 이력 데이터 조회
  const getweekRankFetchData = useCallback(async () => {
    if (isLoading) return;
    try {
      // 포인트 사용 이력 데이터 가져오기
      const responseLankData = await fetchPointData({ ...pointSchema });
      setPointData(responseLankData.data);
      setPagination(responseLankData.pagination);
    } catch (error) {
      console.error(error);
    }
  }, [pointSchema]);

  // 포인트 사용 이력 변경 함수
  const handleChangePointHistoryType = (searchPointTy = 'all') => {
    setPointSchema((prevSchema) => ({ ...prevSchema, pageIndex: 1, searchPointTy }));
  };

  // 이전 달 포인트 내역
  const handleChangePrevPointHistory = () => {
    const { searchDt } = pointSchema;
    const date = prevMonth(searchDt);
    setPointSchema((prevSchema) => ({ ...prevSchema, pageIndex: 1, searchDt: date }));
  };
  // 다음 달 포인트 내역
  const handleChangeNextPointHistory = () => {
    const { searchDt } = pointSchema;
    const date = nextMonth(searchDt);
    setPointSchema((prevSchema) => ({ ...prevSchema, pageIndex: 1, searchDt: date }));
  };

  // 포인트 infinity scroll 함수
  const loadMorePointHistoryList = async () => {
    const { currentPageNo, lastPageNo } = pagination;
    console.log(currentPageNo, 'currentPageNo');
    console.log(lastPageNo, 'lastPageNo');
    if (currentPageNo >= lastPageNo) return; // 마지막 페이지라면 종료

    if (isLoading) return; // 이미 로딩 중이거나 더 로드할 항목이 없으면 종료
    const nextPage = pagination.currentPageNo + 1;
    const responseListData = await fetchPointData({
      ...pointSchema,
      pageIndex: nextPage,
    });

    setPointData((prevList) => [...prevList, ...responseListData.data]);
    setPagination((prevData) => ({ ...prevData, ...responseListData.pagination }));
  };

  return (
    <WindowInfinityScrollContainer loadMore={loadMorePointHistoryList} isLoading={isLoading}>
      <Header backButton={true} title="포인트" subMenu={false} border={0} bgColor={THEMA_COLOR} />
      <Main bg={THEMA_COLOR}>
        {/* section 01  */}
        <SectionContainer>
          <Box>
            <UserCard
              userName={userNm}
              schoolName={schoolNm}
              grade={grade}
              image={userData.userThumnail || userThumnail}
            />
            <Box bgColor={POINT_BOX_COLOR} style={BoxStyle}>
              <p>보유 포인트</p>
              <p>
                <b>{point}</b> P
              </p>
            </Box>
            <Box style={{ ...BoxStyle, border: `1px solid ${POINT_BOX_COLOR}` }}>
              <p>누적 포인트</p>
              <p>
                <b>{accruedPoint}</b> P
              </p>
            </Box>
          </Box>
        </SectionContainer>
        {/* section 02  */}
        <TabPointList
          pointData={pointData}
          date={pointSchema.searchDt}
          handleChangePointHistoryType={handleChangePointHistoryType}
          handleChangePrevPointHistory={handleChangePrevPointHistory}
          handleChangeNextPointHistory={handleChangeNextPointHistory}
        />
      </Main>
    </WindowInfinityScrollContainer>
  );
}

const BoxStyle = {
  marginTop: '1.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '2rem',
};
