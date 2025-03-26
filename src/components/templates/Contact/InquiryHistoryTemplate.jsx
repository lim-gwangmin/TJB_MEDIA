import React, { useEffect, useState } from 'react';

import { INQUIRY_TAB_DATA } from '@constant';
import styled from '@emotion/styled';
import { BOARD_LIST_SCHEMA } from '@schema';
import { BoardService } from '@services/boardService';

import inquiry_image from '@assets/images/inquiry_image.png';

import { VisualBox } from '@components/atoms/Box';
import { WindowInfinityScrollContainer } from '@components/atoms/Layout';
import { Main } from '@components/atoms/Layout';
import { NonData } from '@components/atoms/Text';
import { SectionContainer } from '@components/molecules/Layout';
import { LinkToTabMenu } from '@components/molecules/Tab';
import { Header } from '@components/organisms/Header';

import { useLoading } from '@hooks/useLoading';

export default function InquiryHistoryTemplate({}) {
  const [isBoardListLoading, setFetchBoardList] = useLoading(BoardService.boardList); // 문의내역 리스트 API
  const [boardList, setBoardList] = useState([]);
  const [boardPagination, setBoardPagination] = useState({});

  useEffect(() => {
    fetchBoardList();
  }, []);

  const fetchBoardList = async () => {
    if (isBoardListLoading) return;

    try {
      const response = await setFetchBoardList(BOARD_LIST_SCHEMA);
      const { data, pagination } = response;
      console.log(response);
      setBoardList(data);
      setBoardPagination(pagination);
    } catch (error) {
      console.error(error);
    }
  };

  // 상품 리스트 infinity scroll 함수
  const loadMoreBoardList = async () => {
    const { currentPageNo, lastPageNo } = boardPagination;
    if (currentPageNo >= lastPageNo) return; // 마지막 페이지라면 종료

    if (isBoardListLoading) return; // 이미 로딩 중이거나 더 로드할 항목이 없으면 종료

    const nextPage = currentPageNo + 1;

    const responseBoardtListData = await setFetchProductList({
      ...BOARD_LIST_SCHEMA,
      pageIndex: nextPage,
    });

    setBoardList((prevList) => [...prevList, ...responseBoardtListData.data]);
    setBoardPagination((prevData) => ({ ...prevData, ...responseBoardtListData.pagination }));
  };

  return (
    <WindowInfinityScrollContainer loadMore={loadMoreBoardList} isLoading={isBoardListLoading}>
      <Header backButton={true} title="문의하기" subMenu={false} />
      <LinkToTabMenu tabs={INQUIRY_TAB_DATA} />
      <Main>
        <SectionContainer>
          <VisualBox image={inquiry_image} style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
            <b>문의사항</b>
          </VisualBox>
          {boardList.length ? (
            boardList.map((board, index) => (
              <BoardItem key={index}>
                <BoardTitle>{board.articleNm}</BoardTitle>
                <BoardDate>{board.createDt}</BoardDate>
              </BoardItem>
            ))
          ) : (
            <NonData>문의내역이 없습니다.</NonData>
          )}
        </SectionContainer>
      </Main>
    </WindowInfinityScrollContainer>
  );
}

const BoardItem = styled('div')`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #eaeaea;
`;
const BoardTitle = styled('p')`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const BoardDate = styled('span')`
  display: block;
  margin-top: 0.5rem;
  font-size: 1.1rem;
  color: #999999;
`;
