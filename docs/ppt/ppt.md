* 전체적인 이야기 흐름 틀 잡아야함. ( 이게 목적이 지식전달임 )
  
1. 제목 : ESG 소개 및 활용   
2. 목차
   1. ESG 소개
      1. ESG 정의
      2. ESG 중요성
      3. 경제변수 모델링
      4. 모델의 구분
      5. 시나리오 생성과정
      6. 시나리오 결과
      7. 좋은 ESG 조건
      8. 검증
   2. ESG 이론
      1. 사용되는 기본이론
      2. Stochastic Calculus
      3. Numerical Analysis
      4. Financial Practice
      5. 모델
         1. 전체 모델 종류 및 설명
         2. GBM, Galman, GBM-Localvol
         3. Heston
         4. HW, BK
         5. Vasicek
         6. CIR
         7. Hybird
         8. G2++
         9. Vol Model
   3.  ESG 구현
       1.  Xenarix 소개
       2.  특징
       3.  구조
       4.  UI
       5.  Python
       6.  ResultViwer
       7.  Excel
       8.  Update
   4.  향후 방향
   5.  끝

3. ESG 소개

   1. 정석 vs 야매
      1. 그림
   2. Overview
       ESG (경제 시나리오 생성기)는 미래의 자산의 변화, 경제 상황, 자본 시장 변수의 통계적 분포를 합리적으로 표현함으로써 그에 따른 위험을 적절히 평가하고 위험 완화 전략을 평가할 수 있도록 하는 프로그램입니다. 사용하는 목적에 따라 응용분야는 다양하며, 크게 두가지로 구분할 수 있습니다.

       -> 하나하나의 시나리오가 왜 그렇게 산출되는지는 설명할 필요가 없다. 단지 미래 발생할 수 있는 상황의 유형을 제공할 뿐. 

       응용분야 : 펀드 성과평가, 금융상품 가격산정, 헷지 전략 효과측정, 헷지 그릭 산정,
                 재무 전망, 할인률 산출, 회사의 지급 능력 측정, 유동성 상황, 리스크 익스포저 계량화 등...
                 엄청 많은데 다음과 같이 두가지로 분류 해볼 수 있다.
       
       RW(Real World) : 전략 분석 및 포트폴리오 가치의 미래 변화 전망등을 위한 모델
       RM(Risk Neutral) : 금융 자산 및 보험 계약의 가격 산정를 위한 모델
       - > 무차익거래 조건 등이 충족되어야함. 수학적인 특성등..qhr
       - 보통 이런것들은 상품의 구조가 Non-Linear 하고 복잡하며, 조건부 현금흐름등이 있는 경우에 사용됩니다. ( ELS 나 DLS 이런것들에 사용되기도 하고, Swap계약이라던지 쌍방에 의무가 있는 경우에도 사용된다.)


   3. 중요성(정석과 야매)
       제안서 보고, 워딩 그래도 가져다가 박음, 

       여태까지는 
       금융환경이 복잡 다양화 해지고, 리스크 분석이 중요하며, 

       일관된 관리 및 분석이 필요하고, 데이터 드리븐 환경에서 분석이 중요해 졌다. 
       확률 및 통계적인 분석이 필요하다.
       그래서 ESG가 필요하다. 

       Mean-Variance 를 통한 Risk 분석 및 평가를 위해 필수가 되었음. 
       분석해야할 상품이 많아지고 복잡해지고, 컴퓨팅 파워가 높아지고, 
       
       헷지 전략의 효과측정

       감독기관의 규제의 범위가 복잡해지고, 넓어짐


       일관된 관리 : 상품마다 통합하여 관리, 또는 전망 및 평가에 일관된 시나리오를 사용함.

   4. 한계점
       모델리스크 : 모델의 강점과 한계, 불량 데이터 존재 가능성, 모델마다 다른 산출값, 정답이 없음
       계산시간 : 수렴을 위해 많은 수행시간이 필요함. 충격시나리오등을 하면 몇배로 불어남. gpu 등으로 해결. 상품이 많은경우 문제.
       수렴문제 : 이론적인 가치가 보통 없기때문에 얼마나 근접한지 모름. 수학공식을 일 이용할수 없음. 반복적인 수행이 반드시 필요함. 수렴도 테스트 등 , 여러가지 분산 감소 기법을 이용함.
       데이터 문제 : 모수 추정이라던지 할때 가격 등 의 불량 데이터 존재 가능성, 모수를 왜곡. ai에도 동일한 문제. 가비지 인 가비지 아웃.
       전문성의 정도 : 
       모델 설명 어려움 :

   5. 경제변수 모델링
       ESG에서 주로 모델링 하는 대상들은 보통 5가지로 

       interest rates : 이자율로 할인율 산출 등 어디에 사용함(국가, 회사)
       bond yields and returns : 회사 채권, 여러 채권의 수익률
       equity and fund returns : 주식 펀드 등 수익률
       derivatives greeks and price : 파생상품의 greeks 및 가격
       foreign-exchange rates : 환율, 해외 채권 투자 포지션을 분석할 때 사용함. 

   6. 기초자산 모델의 구분
       기초자산 별로 주로 사용되는 모델은 아래와 같다.

       주식 : gbm , gbm constant , localvol - 지수 적인 증가 모형
       금리 : hw, bk, cir, vasicek          - Mean Reverting, Termstructure Fitting
       환율 : gk                            - IRP
       펀드 : multifactor-gbm               - 수익률이 조합됨
       하이브리드 : hw-bs, hest n            - 이자율과 주식이 조합됨, 변동성
       변동성 : garch, arch, local-vol ,mean-reverting - 시계열 모형 포함
       경기지수 : arima, arma, va            - 계절성 등


   7. 시나리오 생성 과정
       시나리오 생성 목적(충격시나리오 생성, 평가, 분석, 전망등)에 따라, 여러 방법론이 있으며,
       총 10단계로 수행을 한다. 모델을 확정한 후에 생성 목표에 따라 반복 생성을 하여, 분석을 실시한다.
       
       1. 목적 선정
          1. 평가인 경우 두개만 할건지, 여러개 할건지, 일단위
          2. 전망의 경우 연단위, 시뮬횟수등, nuetral 인지 rw인지 등
          3. 비교목적의 경우 어쩌구
          4. 헷지 Greek 산출
       2. target 설정(직접(펀드) 또는 간접(벤치마크))
       3. 시장데이터 및 상관계수 준비(펀드 맵핑, 보유비중, 금리커브)
       4. 모델 선정
       5. 모델 모수 추정
       6. 생성 목표 선정
          1. 분산최소화 델타
          2. 평가값 최소화
       7. general info 설정
          1. simulation 횟수
          2. rand seed 등등... 을 목표에 맞게
       8. 시나리오 생성
       9. 결과 분석 (결과를 통한 analysis)
       10. 다시 3번 반복 (목표 충족 시 까지)
     

   8. 시나리오 결과(예시)
       생성된 데이터를 그래프로 그려보면, 아래와같으며, 충격 시나리오등, 
       엑셀에 200개만뿌리고, 그림 그려봄(주식 하나, 이자율 하나)


   9.  좋은 ESG의 조건
       ESG는 아래와 같은 조건들을 충족하는지 확인하고, 테스트 해야한다. 

       1. 계산의 효율성, 수치적 안정성 및 정확성
       2. 생성하고자 하는 경제변수에 대한 충분한 모델을 가지고 있는가(자산 클래스 커버를 위한)
       3. 시장지표 모수추정 및 back-testing을 통한 현실적인 모델링
       4. 이론적인 검증(Matrinagle Test, Random Test)을 통과
       5. 일관되게 확장 가능한가(확장성)
       6. 개발 및 사용이 용이한가(사용성)
       7. 감사 대응이 용이한가

   10. 검증 및 테스트
       생성된 시나리오 결과를 바탕으로, 아래와 같은 분석을 실시하고, 테스트 검정을 한다.

       1. 난수가 적정하게 산정되었는가( Low Descrepancy, Integral, Mean, Variance )
       2. 생성된 시나리오가, 이론 평균, 분산과 일치 하는가
       3. 추정된 모수를 사용한 모델가격과 시장가격과 일치하는가
       4. 산출 값이 적정한가(경제변수에 따른 비현실적인 값 테스트등, 현실적인 극단값)
   
4. ESG 이론
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


       Random Number : 각각 목적이 다르며, 특징을 요렇다.
       참난수(True Random) : 방사능 붕괴, 대기 소음, 시스템 신호, 우주 방사선
       준난수(Quasi Random) : Sobol, Halton
       의사난수(Psuedo Random) : 메르센, Knuth
       
       각각은 요런의 방법론이 있다. 수식으로 요렇고, 주기도 그러고 어쩌구 등 
       uniform 을 시작으로 해서 normal로 변환해서 쓴다. 변환 방법에는 요런게 있다.
       Box muller(좌표변환) , central limit theorem() , inverse transfrom(누적분포) - 다 Normal 자체가 초월함수여서 적분함수를 모름. 뉴메리컬하게 풀어야댐.


       Monte : 이거는 적분할 때 넓이 구하는거, 일반적으로 말하면 integral or expectation 구해줌.
                어쩌구...


       Variance Reduction : 이거는 분산 감소법 , 방법론은 다음과 같이 여러가지가 있다.
       대조변량 , 적률일치 등


       Interpolation 
       이미 알고 있는 데이터 값들을 이용하여 모르는 값을 추정하는 방법이며, ESG에서는 주로 금리커브 추정에 이용된다. 

       보간법의 종류 : Flat, Linear, Cubic (Discount, Yield, Spot, Forward)
       보외법의 종류 : Linear, Smith-Wilson, Nelson-Siegel, Svensson 각각의 특징

       Correlation : 이거는 상관관계 구하는 방법 , 방법론은 다음과 같이 여러가지 등...
                     피어슨 코릴, 
                     랜덤 뽑고 구하는 방법은 요래
                     두 변수 X 와 Y 간의 선형 상관 관계를 계량화한 수치이며 +1과 -1 사이의 값을 가진다.
                     그림1 : 두자산간 점찍고 그래프
                     그림2 : 매트릭스 (N개의자산)
                     응용분야 : 나열
                     데이터 추정 문제 : 몇개 메서드로 해서 PCA기반(랭크 줄여서)

                     응용분야가 옵션평가 시장 위험 관리 목적을위한 스트레스 테스트 및 시나리오 분석, 또는 신용 파생 상품에 대한 많은 수의 채무자들 사이의 상관 행렬의 명세 가격 책정 또는 신용 위험 관리이런거등...
                     신용위험 쪽이나 이런데는 코퓰라를 많이 쓴다.
                     근데 ESG에서는 보통 상관관계를 사용하는 목적은 얼마나 경제지표들의 현실적으로 묘사가 되는가를 목표로 상관관계 매트릭스를 작성을 하는데...
                     이게 추정 문제가 중요할 수 있다.
                     금융 위기시 동기화라던지, 아웃라이어라던지,
                     두부분으로 나누면, 매트릭스 자체의 문제(다이나믹 매트릭스)는 시간변화에 따른 문제이고,
                     아웃라이어는 모델로 해결을 한다요.

   4. Financial Practice : timegrid, daycounter, calendar ...

       현재 금융 시장과 업무의 상황에 맞게 사용되는 개념들이다.

       * Timegrid : 일간, 월간, 월말, 분기, 분기말, 연간, 연말 등
         이런 것들은 실제로 부채와 자산간의 정확한 시뮬레이션을 위해 필요함.
       * Daycounter 는 요런식으로 있다. 각각 . 우리나라는 보통 요거, pricing할때 쓰임
       이자등.. yearfraction 
       * Calendar 는 휴일( 크게 의미 없다. ) 일요일만 잘 넣어주면댐. 
         데일리일때는 중요할수 있다. 
       * Business day conv : Modify Following, Preceding, ...
       

   5. 기초자산 모델(앞에 꺼랑 중복으로 뺌)
       구분 방법이 여러가지가 있는데, 그냥 이름으로 구분하는게 제일 간단하다.
       여러가지 구분 방법이 있다. 
       잘 구분하지 않으면, 꼬여서 구현할 때 애를 먹을 수 있다.
       다음과 같이 6개정도 된다. (표)

   6. 전반적인 모델에 대한 설명
      Notation , brigo에서 따왔다. ++ 은 termstructure consistant를 말한다.
      fitting curve 가 있다는 말이지... short-model 

   7. GBM, GBM-Const, GBM-LocalVol
      Black-Scholes가 주식을 모델링 할 때 사용한 모델로, 지수적으로 증가하며, 음수가 되지 않는 지표들을 모델링 할 때 사용된다. 변동성 부분이 Local-Vol 형태 또는 Stochastic-Vol가 될 수 있다.

   8. Garman-Kohlhagen
      GBM의 다중금리를 이용한 확장으로 주로 환율을 모델링 하는데 사용된다. 

   9. Heston ( 2-factor )
      GBM 에서 확률 변동성을 이용한 확장으로, Fat-Tail 과 Vol-Smile 효과를 잘 모델링 할 수 있다.

   10. HW, BK ( T-forward measure )
       금리기간구조일치 모형 중 가장 많이 쓰이는 이자율 모형이다.

   11. CIR ( CIR++ )
       균형모형 중 하나로 Vasicek과 비슷 하지만, 이자율이 항상 양수만 산출 되는 모형이다.

   12. Vasicek ( Vasicek++ )
       이자율이 장기 평균에 수렴되도록 하는 모형이다.

   13. G2++
       guassian process 의 두개 버전(캐노니칼 폼) hw2f = g2 두개가 같다는 이야기.
       link 식은 다음과 같다.

   14. Hybrid Model
       GBM 모형에서 이자율 부분이 Hull-White 모형으로 되어 있는 2-Factor 모형이다.
   
   15. Vol Model
       SABR, Heston, Local, 

   16. Calibration
       현재의 시장정보 또는 과거 데이터등을 이용해서 모델에 사용되는 모수를 추정하는 것. 
       
       모델의 모수나 상관관계, 변동성 등을 MLE, GMM, EMM, MA, EWMA 등을 이용함.

5. ESG 활용(Xenarix) - 이거는 예전에 만들어 뒀던거 기본으로 해서 만들음.
   1. 소개

      만들게 된 계기, ESG의 정석 구축, DSL (서로 교환 및 정확한 생성 정보), 인공지능과 연계

      Xenarix 는 앞의

      1. 여태 설명했던 것들의 구현체인데요. 이름은 xenarix입니다. 
      2. 오늘 시현을 그냥 화면으로 대체 할건데요. 
      3. 실제로 업무요건이나 환경이 굉장히 다양하고, 유저들의 니즈 및 자동화 수준이 다른데요, 
      4. 그런 상황들에 적용 하기 위해서, 
      5. 만들게 된 계기는 ESG를 공부하고, 여러 솔루션들을 보니까, 생각보다 가격이 비싸고, 외산이 주를 이루고 있었어요, 쉽게 접근하기가 힘들고, 요새 대세가 Python이나 R인데, 저는 주로 Python을 쓰거든요.. 스크립트 몇줄로 해서, 나는 머 gbm 하나 만들고 싶어, 주식모형, els 평가 해보려면 머 두개.. 이정도 느낌? 세세한건 모르지만, 머 이자율 들어가고, 변동성 들어간다고 배웠어. stochastic proces는 잘 모르겠고, 주식모델이 그런데 어차피 gbm을 쓸거면 다 정해져있고 저 두개만 적당히 집어 넣으면 되지 않나..? 이런 질문 던졌을때.. 아 머 쓰면 되겠구나. 라고 해서
      찾아봤는데요.. 없어요.. 
      검색하면 https://stackoverflow.com/questions/13202799/python-code-geometric-brownian-motion-whats-wrong 
      이런거 나와요.. 적용을 ... 해야대는데... 아... 이게 머지.. 난감함...
      난 그냥 삼성전자, lg전자, 이자율, 

      1. 
      2. 사실 여러가지 버전이 있어서


   2. 특징
      1. 나열식으로 함 (Cross Platform)
   3. 구조
    - 요래 요래 있다.(그림)
   4. UI
    - 설명 : 사용자 UI로 시나리오 파일들을 조회하고 생성등 관리함.
    - 전체 스크린샷. ( 구조 설명 )
    - program 켬
    - geninfo 조정함. 어쩌구
    - 변수를 넣음
    - 모델 몇개 넣고, gen.
    - 상관
    - Shock을 넣어봄. 다시 gen
    - 저장 끄기
    - 파일 리스트를 보여주기, 열어서 내용 보여주기(이런식으로 저장된다.)
    - 로드 해서 다시 보기.
    - 결과 보기
   5. Python
     - 설명 : python version 으로 시스템 배치작업등 자동화 업무에 사용함.
              github web site 에서 소스를 다운받을 수 있음.
     - github 사이트 화면넣음
     - pythonIDE(pycharm)을 열고, install 을 한 후에
     - sample copy함
     - 모델을 몇개 더함. gen을 함.
     - 결과 보기(그래프 그림나오는 거 코드 사용)
     - 그림1 : pycharm 에 그림나오는 스크립트 돌린 것
     - 그림2 : github 사이트
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
   *8. 버전 Update (GitHub)
     - 사이트 3개 소개함 ( 스크린샷하고, 밑에 간략한 설명 )
     -> homepage : www.montrix.co.kr , blog.naver.com/montrix , github.com/xenarix
     - 우선 -> 
   1.  향후 방향
     -> R Library 로 확장
     -> Python 및 R 금융공학 라이브러리 공유 (sol2, 및 k-ics 등 필요한 라이브러리가 업데이트되면 그냥 가져다가 쓰면됨.)
     -> 시나리오 파일을 웹사이트에서 내려받거나 서로 교환 가능.


6.  참고자료
    1.  https://comisef.eu/files/wps031.pdf (svensson 논문)
    2.  http://ssfutures.com/jsps/attfiles/Tr706/8YieldCurveFit[1267058255284] (svensson 삼성선물).pdf
    3.  https://www.wikipedia.org/
    4.  



7.  끝.

------------------------------------------------------------------------
  ------------------------------------------------------------------------
  ------------------------------------------------------------------------
  ------------------------------------------------------------------------
  ------------------------------------------------------------------------




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

---------------------------------------------------------------






