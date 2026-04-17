---
title: GAN 相關研究
創建時間: 2025-04-13
tags:
week: " Week 12"
---
## 本週回顧
把之前看 GAN 相關的研究
整理一下

| 模型           | 核心概念                                                  | 條件式 | paired data | 損失 / 關鍵機制                 | 優點      | 缺點                       | 適用場景    |
| ------------ | ----------------------------------------------------- | --- | ----------- | ------------------------- | ------- | ------------------------ | ------- |
| **GAN**      | 生成器學習從隨機分布映射到真實資料分布，判別器學習區分真偽，形成 minimax 對抗           | x   | x           | JS divergence（隱含）         | 概念通用    | 訓練極不穩                    | 基礎研究    |
| **DCGAN**    | 用 CNN（Conv + BN + ReLU）建模影像的空間結構，使生成器學到局部特徵分佈         | x   | x           | 同 GAN                     | 圖像效果提升  | 不解決本質不穩                  | 基礎圖像生成  |
| **cGAN**     | 在 G 和 D 中引入條件 y（label / image），學習條件分布 P(x\|y)         | v   | v           | GAN loss + condition      | 可控制輸出類型 | 仍不穩                      | 可控生成    |
| **WGAN**     | 將分布差異改為 Wasserstein 距離，使 loss 與分布距離連續且可微              | x   | x           | Wasserstein               | 訓練穩定    | 需 Lipschitz 限制（clipping） | 穩定生成    |
| **WGAN-GP**  | 用 gradient penalty 取代 clipping，強制判別器滿足 1-Lipschitz 條件 | x   | x           | Wasserstein + GP          | 穩定且效果好  | 計算較重                     | 高品質生成   |
| **Pix2Pix**  | 學習一個從輸入影像到輸出影像的條件映射，並用 L1 loss 約束結構一致性                | v   | v           | cGAN + L1 loss            | 結構保留強   | 需配對資料                    | 影像轉換    |
| **CycleGAN** | 同時學習 A→B 和 B→A，透過 cycle consistency 強迫映射保持資訊不丟失       | x   | x           | GAN + cycle loss          | 不需配對資料  | 結構可能扭曲                   | 無配對風格轉換 |
| **StarGAN**  | 用單一模型學習多個 domain 的映射，透過 domain label 控制輸出             | v   | x           | GAN + classification loss | 多風格整合   | 訓練複雜                     | 多屬性轉換   |
## 重要進展
目前架構確定有以下特性
1. 回歸 1 對 1 的字體風格轉換 不要奇怪的編碼-> 不用 StarGAN、cGAN，但修改 pix2pix
2. 使用較穩定架構 WGAN-GP 他沒啥缺點 基本上應該可以直接採用
3. 使架構盡量簡潔


## 研究方向計畫
盡快確認模型架構

---
@J - Week 12
