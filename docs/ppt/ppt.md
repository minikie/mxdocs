# ESG 소개 - 업무 esg 설명 : (참고자료 esg 검색 후, acturary)
    - 정의 : An economic scenario generator (ESG) is a computer-based model of an economic environment that is used to produce simulations of the joint behavior of financial market values and economic variables. Two common applications are driving the increased utilization of ESGs
    -
    - needs : 금감원 .. 보험 등 어쩌구
    - 중요성 : trasition density ,
    - 용도 : pricing, 전망
    - 구분 , 모델 ,
    -

# 이론 설명
    - sde 기초
    - stochastic process and model ( calculus )
    - change of numerier
    - brownian motion
    - transition density
    - correlation
    - hw, gbm, localvol 등...
    - random ( normal converting )
    - discretization (first order, second order)
    - variance reduction (moment matching, ... )

# xenarix 설명 및 기능 시현
    - xenarix 구조 및 특징
    - engine 설명
    - ui (windows)
    - 변수 선정
    - 모형 선정
    - Shock 선정
    - 생성

    - result viwer (windows)
    - 결과확인

    - python
    - 설치 방법
    - calibration
    - random test 등 여러가지 기능

    - excel 연동 -> 이거 vsto로도 해야함. 메뉴 붙일거거든...

# 사이트 및 어쩌구

* 전체적인 이야기 흐름 틀 잡아야함. ( 이게 목적이 지식전달임 )
  1. 제목
  2. 목차
  3. 소개 -> 정의 (1-1)
            한 두줄 쓰고.
            RW 랑 RN 네모칸 하나씩 해서 그 밑에 설명

       ->  어디다 쓰는가 왜 중요한가(1-2)
            한 두세줄 씀 : 전사적인 리스크 관리 시뮬레이션 및 어쩌구 해서 중요하다. joint 어쩌구

       -> 그래서 중요한 이야기를 디테일을 좀 하고
            그 밑에 다가 환율 이라던지, 영역별로 할거 나열등

       -> 이런 지표들을 모델링 한다. (1-3)
           interest rates : 이자율로 할인율 산출 등 어디에 사용함
           bond yields and returns : 회사 채권, 여러 채권의 수익률
           equity and fund returns : 주식 펀드 등 수익률
           derivatives greeks and returns : 파생상품의 greeks 및 수익률
           foreign-exchange rates : 환율, 해외 채권 투자 포지션을 분석할 때 사용함.

       -> 크게 모델링 하는 방법에는 목적에 따라 요래 구분댄다(1-4)
           주식 : gbm , gbm constant , localvol
           금리 : hw , bk
           환율 : gk

        -> 이런것들을 이런 순서대로 작업한다.(그림) (1-5)
          1. target 설정(직접(펀드) 또는 간접(벤치마크))
          2. 시장데이터 준비(펀드 맵핑, 보유비중, 금리커브)
          3. 모델 선정
          4. general info 설정
          5. 시나리오 생성
          6. 결과 분석
          7. 다시 3번 반복 (부채 감속 목적)
          8.

        -> 이런것들을 실제로 모델링을 하면 이런모양이다 (그림) (1-6)
           future projection 등 미래의 값들을 이런식의 모델을 이용해서 joint로 뽑는다.
           t 시간의 축

       -> 좋은 esg라는건 이런거다. (업무적 vs 프로그램적) (1-7)
            1. 계산의 효율성 및 안정성
            2. 생성하고자 하는 경제변수에 대한 충분한 모델을 가지고 있는가
            3. 시장지표 모수추정을 통한 현실적인 모델링
            4. 이론적인 검증(Expectation)을 통과
            5. 일관되게 확장 가능한가

       -> 검증은 요렇게 한다. (1-8)
            1. 생성된 시나리오가 , 이론 평균, 분산과 일치 하는가
            2. 추정된 모수를 사용한 모델가격과 시장가격과 일치하는가
            3.

  4. 이론 -> esg를 만들기 위해서는 하는 프로세는 이렇다.
       -> 들어가는 esg 기본 이론 크게 요래 나뉜다 (2-1)
          (stochastic calculus - sde, brownian motion, transi
           numerical analysis - random number, montecarlo, variance reduction,
           interpoplation, correlation...
           practice implementation - timegrid, daycounter, calendar, ...  )
          중요한 큰 꼭지만 몇개 설명하는 방식으로 함. 그것들을 하나하나 설명함
       -> 1. sde , bm , transi

       -> Model 이론은 요렇게 나뉜다. 나누는 방법이 여러가지가 있는데,
          나누는 방법에 대한 이야기(stock, ir, fx, )

       -> 개별 Model 들 이론 : 어쩌구
          GBM
          HW
          HWBS
          Heston
          Galman

        -> Calibration : 이 뭔가 정의 쫑쫑쫑
          대상상품 - swaption , eq-option , historical data 등

  5. xenarix -> 소개, 구조 , 구현 , 특징
        -> 소개 : 모델들을 구현한 것. (3-1)
        -> 구조 : 그림 (Python , C++, Excel , UI, ResultViewer) (3-2)
        -> 특징 : 손쉽게 모델을 추가 및 변경, framework이 있어서 모델만 추가하면 짠.
                  native engine 이라 속도가 빠름, 다양한 random 등, timegrid 등 변경
                  여러가지 플랫폼 등. 모델의 공유 가능(generation xen file)
        -> UI 보여줌 (3-3)
        -> Python 보여줌(3-4)
        -> Excel 보여줌(3-5)
        -> ResultViewer 보여줌(3-6)
        -> update : www.montrix.co.kr , blog.naver.com/montrix , github.com/xenarix
        -> update 방향 -> 1.0 -> 2.0 : 솔루션 쪽으로 개발됨.

        끝.

처음에 esg 는 요런거다, 근데 이게 여기, 여기에 쓰인다..

왜 중요해 졌는가 ->
과거에는 esg라는게 별로 안중요했다 요랬다... 근데 요새는 중요해졌다. 이러고 있다..

실제로 보험 쪽이나 금융쪽서는 요렇게 쓴다. 어쩌구 해서 쓴다..

실제로 약간 구체적으로는 요런 걸 모델링 해서 쓴다... yield, 환율

esg의 큰 구분은 mc랑 rw가 있다.. 각각은 요렇다.. 모델, 칼리브레이션, 목적 등

검증은 이런식으로 한다.
