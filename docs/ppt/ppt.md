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
  
  1. 제목 : ESG 소개 및 활용
     
  2. 목차
     1. ESG 소개
        1. 정의
            ESG (경제 시나리오 생성기)는 금융 시장 가치 측정과 경제적 변수 모델을 시뮬레이션하는 데 사용되는 시뮬레이션 경제 모델입니다. 주로 이 두가지 목적 사용됩니다.
            
            ESG 는 크게 경제 변수를 모델링을 위한 RW (Real World Model)과 금융상품 가치 평가에 사용되는 RN(Risk Neutral Model)로 나뉘어 집니다.

            RW : 어쩌구 , RM

        2. 중요성
            제안서 보고, 워딩 그래도 가져다가 박음
            

        3. 경제변수 모델링(그림 잘 그려넣음)
            ESG에서 주로 모델링 하는 대상들은 다음과 같다...

            interest rates : 이자율로 할인율 산출 등 어디에 사용함
            bond yields and returns : 회사 채권, 여러 채권의 수익률
            equity and fund returns : 주식 펀드 등 수익률
            derivatives greeks and returns : 파생상품의 greeks 및 수익률
            foreign-exchange rates : 환율, 해외 채권 투자 포지션을 분석할 때 사용함. 


        4. 모델의 구분
            보통 알려진 모델은 아래와 같다...

            주식 : gbm , gbm constant , localvol - 지수 적인 증가 모형
            금리 : hw , bk                       - Mean Reverting, Termstructure Fitting
            환율 : gk                            - IRP
            펀드 : multifactor-gbm               - 수익률이 조합됨
            하이브리드 : hw-bs, heston            - 이자율과 주식이 조합됨, 변동성
            변동성 : garch-arch, mean-reverting   - 
            경기지수 : arima                      - 계절성 등


        5. 시나리오 생성 과정
            시나리오를 생성하는 과정은 목적(충격시나리오 생성, 평가 분석, 전망등)에 따라 다르며, 
            일반적으로 8단계로 수행을 한다.

            - target 설정(직접(펀드) 또는 간접(벤치마크))
            - 각 모델 선정
            - 시장데이터 및 상관계수 준비(펀드 맵핑, 보유비중, 금리커브)
            - Calibration 수행
            - general info 설정
            - 시나리오 생성
            - 결과 분석
            - 다시 3번 반복 (부채 감소 목적)
          

        6. 시나리오 결과(예시)
            생성된 데이터를 그래프로 그려보면, 아래와같으며, 충격 시나리오등, 


        7. 좋은 ESG의 조건
            ESG 는 아래와 같은 조건들을 만족해야하며, 어쩌구

            1. 계산의 효율성 및 안정성
            2. 생성하고자 하는 경제변수에 대한 충분한 모델을 가지고 있는가
            3. 시장지표 모수추정을 통한 현실적인 모델링
            4. 이론적인 검증(Expectation)을 통과
            5. 일관되게 확장 가능한가

        8. 검증 
            생성된 시나리오 결과를 바탕으로, 아래와 같은 분석을 실시하고, 테스트 검정을 한다.

            1. 생성된 시나리오가 , 이론 평균, 분산과 일치 하는가
            2. 추정된 모수를 사용한 모델가격과 시장가격과 일치하는가
            3.        
        
     2. ESG 이론
        1. 사용되는 기본이론
            금융공학의 심장부 역할을 담당하며, 거의 대부분의 이론이 사용된다. 3부분으로 나눌 수 있다.

        2. Stochastic Calculus : SDE, Browinan Motion, Transition Density ..., 
            Numerier(Measure) change -> 잠깐 설명 pricing kernel 을 바꾼다는 이야기임.

            그냥 검색해서 박음

            SDE : 정의 - 화이트 노이즈를 가지는 수식

            형태는 - 요래 생겼다. ( 그림 dx = 어쩌구 )
            이게 풀린다는 이야기랑 안풀린다는 이야기는 이런거다.

            BM or Wiener Process : 이거는 Normal Random 의 sequence 형태 sigma space 라고 불리는 도메인

            Transition Density : 이거는 보통 시간의 축으로 해서 시간이 일정 기간 지날 때의 density 
            Normal이 아닌 경우가 있다.

            Numerier(Measure) change : P/Q measure (각각 설명), T-forward, spot
        
        3. Numerical Analysis : random number, montecarlo, variance reduction,
                                interpoplation, correlation ...
            그냥 검색해서 박음

            Random Number : 참난수 , 준난수 , 의사난수 각각 목적이 다르며, 특징을 요렇다.
            각각은 요식의 방법론이 있다. 수식으로 요렇고, 주기도 그러고 어쩌구 등 
            uniform 을 시작으로 해서 normal로 변환해서 쓴다. 변환 방법에는 요런게 있다.
            Box muller(좌표변환) , central limit theorem() , inverse transfrom(누적분포) - 다 Normal 자체가 초월함수여서 적분함수를 모름. 뉴메리컬하게 풀어야댐.

            Monte : 이거는 적분할 때 넓이 구하는거, 일반적으로 말하면 integral or expectation 구해줌.
                     어쩌구...

            Variance Reduction : 이거는 분산 감소법 , 방법론은 다음과 같이 여러가지가 있다.
            대조변량 , 적률일치 등

            Interpolation : 이거는 두개 선 있는거

            Correlation : 이거는 상관관계 구하는 방법 , 방법론은 다음과 같이 여러가지 등...
                          피어슨 코릴, 
                          랜덤 뽑고 구하는 방법은 요래


        4. Financial Practice : timegrid, daycounter, calendar ...
            
            Timegrid는 요럴때 쓴다. 

            daycounter 는 요런식으로 있다. 각각 . 우리나라는 보통 요거, pricing할때 쓰임
            이자등.. yearfraction 

            calendar 는 휴일( 크게 의미 없다. ) 일요일만 잘 넣어주면댐. 데일리일때는 중요할수 있다.


        각각 설명..

        5. 사용 모델의 종류
            다음과 같이 6개정도 된다. (표)

            구분 방법이 여러가지가 있는데, 그냥 이름으로 구분하는게 제일 간단하다.

        6. 전반적인 모델에 대한 설명
           Notation , brigo에서 따왔다. ++ 은 termstructure consistant를 말한다.
           fitting curve 가 있다는 말이지... short-model 

        7. GBM, GBM-Const, GBM-LocalVol
           sde 수식 및 설명 이건 그냥 text book 참고

        8. Galman-Kol
           얘는 그냥 fx 쪽에서 사용 옵션 구할때 요래 구한다.
            IRP 이용해서 구함.
            모수는 요래 사용함.

        9. Heston ( 2-factor )
            만든놈 : 누구, 특징 : 어쩌구
            transition density : 어쩌구
            sde 수식 및 설명
            모수의 의미

        10. HW, BK ( T-forward measure )
            sde 수식 및 설명 이건 그냥 text book 참고

        11. CIR ( CIR++ )
            sde 수식 및 설명 이건 그냥 text book 참고

        12. Vasicek ( Vasicek++ )
            sde 수식 및 설명 이건 그냥 text book 참고

        13. G2++
            guassian process 의 두개 버전(캐노니칼 폼) hw2f = g2 두개가 같다는 이야기.
            link 식은 다음과 같다.

        14. Hybrid Model
            Hw-BS
        
        15. Vol Model
            SABR, Heston, Local, 


        16. Calibration
            현재의 시장정보, 과거 데이터등을 이용해서 모수를 추정하는 것. 
            MLE를 이요하거나, 해찾기를 이용해서 찾음

            변동성 추정 : Option
            모수 추정 :
            상관관계 추정 :
   
     3. ESG 활용(Xenarix) - 이거는 예전에 만들어 뒀던거 기본으로 해서 만들음.
        1. 소개
        2. 특징
        3. 구조
         - 요래 요래 있다.(그림)
        4. UI
         - 설명 : 사용자 UI로 시나리오 파일들을 조회하고 생성등 관리함.
         - 전체 스크린샷. ( 구조 설명 )
         - program 켬
         - 모델 몇개 넣고, gen.
         - 결과 보기
        5. Python
          - 설명 : python version 으로 시스템 배치작업등 자동화 업무에 사용함.
                   github web site 에서 소스를 다운받을 수 있음.
          - github 사이트 화면넣음
          - pythonIDE(pycharm)을 열고, install 을 한 후에
          - sample copy함
          - 모델을 몇개 더함. gen을 함.
          - 결과 보기(그래프 그림나오는 거 코드 사용)
        6. ResultViewer
          - 설명 : 생성된 시나리오의 결과 조회하며, 저장소를 조회하고 관리함.
          - 전체 스크린샷. ( 구조 설명 )
          - 켬, repository 선택함
          - 위에서 생성함 것들 결과 보여줌
        7. Excel 
          - Excel Version 으로 사용자 업무 등에 사용함.
          - 함수 list를 우선 나열(표) - 설명 및 api site가 필요함... 차후
          - sample excel을 열음
          - 모델은 정해져있음
          - 모수 몇 개 바꿈
          - 결과 보기
        *8.  버전 Update (GitHub)
          - 사이트 3개 소개함 ( 스크린샷하고, 밑에 간략한 설명 )
          -> homepage : www.montrix.co.kr , blog.naver.com/montrix , github.com/xenarix
          - 우선 -> 
        1.  향후 방향
          -> update 방향 -> 1.0 -> 2.0 : 솔루션 쪽으로 개발됨.
          -> sol2, 및 k-ics 등 필요한 라이브러리가 업데이트되면 그냥 가져다가 쓰면됨.
          -> 시나리오 파일을 웹에서 내려받거나 서로 교환할 수 있음.( 사이트..? )

     4.  끝.
   
  ------------------------------------------------------------------------
  ------------------------------------------------------------------------
  ------------------------------------------------------------------------
  ------------------------------------------------------------------------
  ------------------------------------------------------------------------


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
          - program 켬
          - 모델 몇개 넣고, gen.
          - 결과 보기

        -> Python 보여줌(3-4)
          - 설치함
          - sample copy함
          - 모델을 몇개 더함. gen.
          - 결과 보기

        -> ResultViewer 보여줌(3-5)
          - 설치함
          - 켬, repository 선택함
          - 위에서 생성함 것들 결과 보여줌
          - 

        -> Excel 보여줌(3-6)
          - 설치함
          - sample excel을 열음
          - 모델은 정해져있음
          - 모수 몇 개 바꿈
          - 결과 보기


        -> update : www.montrix.co.kr , blog.naver.com/montrix , github.com/xenarix
        -> update 방향 -> 1.0 -> 2.0 : 솔루션 쪽으로 개발됨.
        -> sol2, 및 k-ics 등 필요한 라이브러리가 업데이트되면 그냥 가져다가 쓰면됨.
        -> 시나리오 파일을 웹에서 내려받거나 서로 교환할 수 있음.( 사이트..? )

        끝.


처음에 esg 는 요런거다, 근데 이게 여기, 여기에 쓰인다..

왜 중요해 졌는가 ->
과거에는 esg라는게 별로 안중요했다 요랬다... 근데 요새는 중요해졌다. 이러고 있다..

실제로 보험 쪽이나 금융쪽서는 요렇게 쓴다. 어쩌구 해서 쓴다..

실제로 약간 구체적으로는 요런 걸 모델링 해서 쓴다... yield, 환율

esg의 큰 구분은 mc랑 rw가 있다.. 각각은 요렇다.. 모델, 칼리브레이션, 목적 등

검증은 이런식으로 한다.


---------------------------------------------------------------
실습 자료를 만들고, 대학가서 강의하자요...
실무 할 때 사용하는 방법 등 -> 생성 xen 파일이라던지, 커브는 어디서 쓴다던지 등..
python or excel 등

---------------------------------------------------------------
우선 대상을 수식을 많이 사용하지 않는 그런 방향으로 하고, 일반적으로 경영자나 실무자가
어려움을 느끼지 않는 정도의 수준으로 설명을 30-40분정도로 함. 쓰임새라던지 중요한 포인트
이런게 중요하다 등. esg는 이런거다.  근데 안쪽에는 이런 이론들이 있다.








