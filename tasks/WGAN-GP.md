---
title: "WGAN-GP"
創建時間: "2026-04-15"
開始執行: false
完成: false
有用的: false
---
## 資料來源
[甘 — 瓦瑟斯坦甘與 WGAN-GP。訓練 GAN 很難。模特兒可能永遠不會...... |作者：許強納森 |媒介 --- GAN — Wasserstein GAN & WGAN-GP. Training GAN is hard. Models may never… | by Jonathan Hui | Medium](https://jonathan-hui.medium.com/gan-wasserstein-gan-wgan-gp-6a1a2aa1b490)

[Common Training Loss Curve of DCGAN and WGAN - CV Notes](https://cvnote.ddlee.cc/2019/09/26/dcgan-wgan-training-loss-curve)
## 研究筆記
但 wgan-gp無法實際計算wasserstein 吧? 他不是要窮舉嗎?

你這個問題問得非常關鍵，而且你其實已經抓到重點了 👍

👉 **結論先講：**  
**對，WGAN-GP 並沒有「真的去算」原始定義的 Wasserstein 距離（也不可能窮舉）**  
👉 它用的是一個「等價但可優化的形式」來近似。

---

# 🔴 為什麼不能直接算？

你前面那個定義是：

> 在所有 joint distribution γ(x, y) 中找最小成本

👉 問題是：

- γ(x, y) 有**無限多種**
- 是一個「函數空間的最佳化問題」

👉 完全不可計算（更別說 deep learning）

---

# 🔁 關鍵轉換：換一種等價寫法

Wasserstein-1 距離有一個超重要的理論：

👉 **Kantorovich–Rubinstein duality**

（名字不用背，但概念很重要）

---

## ✔ 它把問題變成：

W(Pr,Pg)=sup⁡∥f∥L≤1Ex∼Pr[f(x)]−Ex∼Pg[f(x)]W(P_r, P_g) = \sup_{\|f\|_L \le 1} \mathbb{E}_{x \sim P_r}[f(x)] - \mathbb{E}_{x \sim P_g}[f(x)]W(Pr​,Pg​)=∥f∥L​≤1sup​Ex∼Pr​​[f(x)]−Ex∼Pg​​[f(x)]

---

## 🧠 白話翻譯

原本是：

> 想怎麼搬土（γ）

現在變成：

> 找一個函數 f，能「最大區分」兩個分佈

---

👉 也就是：

- 真實資料 → f(x) 高
- 生成資料 → f(x) 低

👉 差距越大 → 距離越大

---

# 🔥 WGAN 在做什麼？

👉 用一個神經網路 D(x)D(x)D(x) 去「當這個 f」

所以：

D≈fD \approx fD≈f

---

## ✔ 訓練目標變成：

max⁡DE[D(xreal)]−E[D(xfake)]\max_D \mathbb{E}[D(x_{real})] - \mathbb{E}[D(x_{fake})]Dmax​E[D(xreal​)]−E[D(xfake​)]

👉 這個就是：

> **在找最能分開兩個分佈的函數**

---

# ❗ 但有一個條件

剛剛那個 dual 有限制：

> |f|ₗ ≤ 1（1-Lipschitz）

👉 這就是：

👉 **梯度不能太大（你剛剛問的）**

---

# 🔧 那 WGAN-GP 做了什麼？

👉 它沒有真的「限制函數空間」

👉 而是用這個近似：

(∥∇xD(x)∥−1)2(\|\nabla_x D(x)\| - 1)^2(∥∇x​D(x)∥−1)2

👉 去「逼」：

> D(x) 看起來像 Lipschitz 函數

---

# 🎯 所以你問的問題答案是：

## ❓ WGAN-GP 有沒有算 Wasserstein？

👉 **沒有直接算 primal（搬土那個）**

👉 **而是用 dual form 去「近似最大化」**


---

![](Pasted%20image%2020260415003853.png)

## 研究更新紀錄


## 簡單結論



---
[[任務清單]]
