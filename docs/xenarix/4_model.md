

# 기초자산 모델

## 개요

모델의 종류는 다음과 같다.

|분류|  모델      | 이름                      | 요인     |  비고   |
|----|-----------|---------------------------|---------|---------|
| IR | HW        | Hull-White                | 1       |         |
| IR | BK        | Black-Karasinski          | 2       |         |
| EQ | GBM       | Geometric Brownian Motion | 1       |         |
| EQ | GBM_CONST | GBM (Constant Parameter)  | 1       |         |
| FX | GK        | Garman–Kohlhagen          | 1       |         |


## 이자율 모형

### 헐-화이트
수식 : dr = a(theta - r) ...

```python
hw1f = xen.HullWhite1F('ir_rate1')

hw1f.fitting_curve.tenor = ['3M', '6M', '9M', '12M', '24M', '36M', '48M', '60M', '120M', '180M']
hw1f.fitting_curve.value = [0.0164, 0.0161, 0.0159, 0.0164, 0.0173, 0.0182, 0.0191, 0.0218, 0.0229, 0.0229]
hw1f.alpha_curve.tenor = ['36M']
hw1f.alpha_curve.value = [0.1]
hw1f.sigma_curve.tenor = ['12M', '24M', '36M']
hw1f.sigma_curve.value = [0.01, 0.01, 0.01]
```

### 블랙-카라진스키
수식 : dr = a(theta - r) ...

```python
bk1f = xen.BK1F('ir_rate2')

bk1f.fitting_curve.tenor = ['3M', '6M', '9M', '12M', '24M', '36M', '48M', '60M', '120M', '180M']
bk1f.fitting_curve.value = [0.0164, 0.0161, 0.0159, 0.0164, 0.0173, 0.0182, 0.0191, 0.0218, 0.0229, 0.0229]
bk1f.alpha_curve.tenor = ['36M']
bk1f.alpha_curve.value = [0.1]
bk1f.sigma_curve.tenor = ['12M', '24M', '36M']
bk1f.sigma_curve.value = [0.01, 0.01, 0.01]
```

### CIR 1 Factor
수식 : dr = a(theta - r) ...

```python
cir1f = xen.CIR1F('ir_rate2')

cir1f.r0 = 0.03
cir1f.alpha = 0.1
cir1f.longterm = 0.1
cir1f.sigma = 0.01
```


## 주식 모형

### GBM
수식 : dr = a(theta - r) ...


```python
gbm = xen.GBM('index1')

gbm.x0 = 100
gbm.rf_curve.tenor = ['3M', '6M', '9M', '12M', '24M', '36M', '48M', '60M', '120M', '180M']
gbm.rf_curve.value = [0.0164, 0.0161, 0.0159, 0.0164, 0.0173, 0.0182, 0.0191, 0.0218, 0.0229, 0.0229]
gbm.div_curve.tenor = ['100Y']
gbm.div_curve.value = [0.005]
gbm.sigma_curve.tenor = ['5Y', '100Y']
gbm.sigma_curve.value = [0.3, 0.2]
```

### GBM Const
수식 : dr = a(theta - r) ...

```python
gbm_const = xen.GBMConst('index2')

gbm_const.x0 = 100
gbm_const.rf = 0.03
gbm_const.div = 0.01
gbm_const.sigma = 0.3
```

### GBM LocalVol
수식 : dr = a(theta - r) ...

```python
gbm_localvol = xen.GBMLocalVol('index3')
gbm_localvol.x0 = 100

gbm_localvol.rf_curve.tenor = ['3M', '6M', '9M', '12M', '24M', '36M', '48M', '60M', '120M', '180M']
gbm_localvol.rf_curve.value = [0.0164, 0.0161, 0.0159, 0.0164, 0.0173, 0.0182, 0.0191, 0.0218, 0.0229, 0.0229]
gbm_localvol.div_curve.tenor = ['100Y']
gbm_localvol.div_curve.value = [0.005]

gbm_localvol.sigma_surface.tenor = ['1Y', '2Y', '3Y', '4Y', '5Y', '100Y']
gbm_localvol.sigma_surface.strike = (gbm_localvol.x0 * np.array([0.8, 0.9, 1.0, 1.1, 1.2, 1.3, 1.4])).tolist()

gbm_localvol.sigma_surface.matrix = [[0.3, 0.29, 0.28, 0.27, 0.26, 0.26],
                                [0.3, 0.29, 0.28, 0.27, 0.26, 0.26],
                                [0.3, 0.29, 0.28, 0.27, 0.26, 0.26],
                                [0.3, 0.29, 0.28, 0.27, 0.26, 0.26],
                                [0.3, 0.29, 0.28, 0.27, 0.26, 0.26],
                                [0.3, 0.29, 0.28, 0.27, 0.26, 0.26],
                                [0.3, 0.29, 0.28, 0.27, 0.26, 0.26]]
```


## 환율 모형

### 갈만-콜하겐
수식 : dr = a(theta - r) ...

```python
gk = xen.GarmanKohlhagen(process_name)

gk.sections["X0"] = 100

gk.dom_rf_curve.tenor = ['3M', '6M', '9M', '12M', '24M', '36M', '48M', '60M', '120M', '180M']
gk.dom_rf_curve.value = [0.0164, 0.0161, 0.0159, 0.0164, 0.0173, 0.0182, 0.0191, 0.0218, 0.0229, 0.0229]
gk.for_rf_curve.tenor = ['100Y']
gk.for_rf_curve.value = [0.005]
gk.sigma_curve.tenor = ['5Y', '100Y']
gk.sigma_curve.value = [0.3, 0.2]
```


## 상관관계

```python

scen1.refresh_corr()
scen1.set_corr(gbm1, gbm3, 0.3)
scen1.set_corr(gbm1, gbm2, 0.5)

```

Supposing that $y >= 0$ and that $[\log x]$ represents the integer part of $\log x$, let:

$$\Phi (y) = \frac {1} {2 \pi i} \int_{2 - i \infty}^{2 + i \infty} \frac {y^{\omega} \mathrm{d} \omega} {\omega \left(1 + \frac {\omega} {(\log x)^{1.1}}\right)^{[ \log x ] + 1}}, x > 1$$

Obviously, when $0 <= y <= 1$, there is $\Phi(y) = 0$. For all $y >= 0$, $\Phi(y)$ is a non-decreasing function.

When $\log x>=10^4$ and $y>= e^{2{(\log x)}^{-0.1}}$, thus:

$$1 - x^{- 0.1} <= \Phi (y) <= 1$$