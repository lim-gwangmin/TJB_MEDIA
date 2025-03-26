import { useEffect, useState } from 'react';

function useQuizController({ initialTime, quizListLength }) {
  const [answerList, setAnswerList] = useState([]); // 퀴즈 정답 리스트
  const [timeLeft, setTimeLeft] = useState(initialTime); // 남은 시간 관리
  const [gaugeWidth, setGaugeWidth] = useState(100); // 게이지 너비 관리
  const [timeEnded, setTimeEnded] = useState(false); // 타이머 종료 유무
  const [endedYouTube, setEndedYouTube] = useState(false); // 유튜브 종료 유무
  const [isCompleted, setIsCompleted] = useState(false); // 문제 입력 여부
  const [isCaptionModal, setIsCaptionModal] = useState(false); // 자막 모달 스위치

  // 타이머, 유튜브 리셋
  const handleReset = () => {
    setTimeEnded(false); // 타이머 종료 초기화
    setEndedYouTube(false); // 유튜브 종료 초기화
    setTimeLeft(initialTime); // 남은 시간 초기화
    setGaugeWidth(100); // 게이지 초기화
    setIsCompleted(false); // 문제 입력 여부 초기화
  };

  // 타이머 종료 시 호출
  const handleTimeUp = () => {
    setTimeEnded(true);
  };

  // 유튜브 종료 시
  const handleEndedYouTube = (event) => {
    if (event.data === window.YT.PlayerState.ENDED) {
      setEndedYouTube(true);
    }
  };
  // 정답 입력 유무
  const handleComplated = (bool) => {
    setIsCompleted(bool);
  };

  // 자막 모달 토글
  const handleCaptionModal = () => {
    setIsCaptionModal(!isCaptionModal);
  };
  // 정답 입력
  const handleChandeAnswer = ({ quiz, quizCd, answer }) => {
    // 정답 입력 유무 체크
    if (answer || answer === false) {
      setIsCompleted(true);
    }

    // 중복된 답안이 있는지 확인
    const existingAnswerIndex = answerList.findIndex(
      (currentAnswer) => currentAnswer.quizCd === quizCd,
    );

    // 기존에 답이 있는 경우, 해당 답을 업데이트
    if (existingAnswerIndex !== -1) {
      const updatedAnswerList = answerList.map((currentAnswer, index) =>
        index === existingAnswerIndex ? { ...currentAnswer, answer } : currentAnswer,
      );
      setAnswerList(updatedAnswerList);
    }
    // 새로운 답을 추가
    else {
      setAnswerList([...answerList, { quiz, quizCd, answer }]);
    }
  };
  // 타이머 카운트
  useEffect(() => {
    let interval;
    if (endedYouTube && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => {
          const newTime = prevTime - 1;
          setGaugeWidth((newTime / initialTime) * 100);
          if (newTime <= 0) {
            clearInterval(interval);
            handleTimeUp();
          }
          return newTime;
        });
      }, 1000);
    }

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 클리어
  }, [endedYouTube, timeLeft, initialTime]);

  return {
    timeLeft,
    gaugeWidth,
    initialTime,
    timeEnded,
    endedYouTube,
    handleTimeUp,
    handleEndedYouTube,
    isCompleted,
    isCaptionModal,
    answerList,
    quizListLength,
    handleCaptionModal,
    handleChandeAnswer,
    handleComplated,
    handleReset,
  };
}

export default useQuizController;
