import React, { useState } from 'react';
import './App.css';
import {
  BookOpen,
  Settings,
  FileText,
  PieChart,
  MousePointerClick,
  BarChart3,
  Cpu,
  Download,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Globe,
  Info,
  Layers,
} from 'lucide-react';

const data = {
  zh: {
    header: {
      badge: 'ISACA 專業指南',
      title: 'ISACA IT審計框架ITAF™ 第5版 指南',
      introTitle: '什麼是 ITAF™？',
      introDesc:
        '資訊科技審計框架 (IT Audit Framework, ITAF™) 是由 ISACA 發布的全球性綜合框架。它為 IT 審計與鑑證專業人員明確定義了角色、職責、職業道德規範以及必備的知識與技能。',
      industryStatusTitle: '行業地位',
      industryStatusDesc:
        'ITAF™ 被公認為全球 IT 審計領域的「黃金標準」。它為全球企業提供了一套客觀、一致且高度結構化的審計方法論，確保審計結果具備高度的可靠性、透明度與商業價值。',
    },
    docs: [
      {
        id: 1,
        title: 'IT Audit Framework (ITAF™) 第五版',
        subtitle: '資訊科技審計專業實踐核心框架',
        description:
          '本框架為從業人員提供強制性標準 (Standards)、推薦性指南 (Guidelines) 與輔助工具 (Tools and Techniques)，確保審計工作的品質、客觀性與一致性。',
        downloadLink: 'https://drive.google.com/file/d/1kNpGvKysyF2HyXjgozRiKB-H7_C7e17o/view?usp=drive_link',
        accentColor: 'bg-blue-600',
        lightColor: 'bg-blue-50',
        textColor: 'text-blue-600',
        corePointsTitle: '核心指南清單',
        categories: [
          {
            category: '一般標準 (General Standards 1000系列)',
            items: [
              {
                title: '1001 審計章程 (Audit Charter)',
                subItems: [
                  { id: '1001.1', text: '定義審計章程' },
                  { id: '1001.2', text: '批准審計章程' },
                  { id: '1001.3', text: '溝通審計章程' },
                  { id: '1001.4', text: '定期審查與對齊審計章程' },
                ],
              },
              {
                title: '1002 組織獨立性 (Organizational Independence)',
                subItems: [
                  { id: '1002.1', text: '免受不當影響與利益衝突' },
                  { id: '1002.2', text: '職能報告以確保獨立性' },
                  { id: '1002.3', text: '行政報告以確保績效' },
                ],
              },
              {
                title: '1003 審計師客觀性 (Auditor Objectivity)',
                subItems: [
                  { id: '1003.1', text: 'IT 審計與鑑證業務中的客觀性' },
                ],
              },
              {
                title: '1004 合理期望 (Reasonable Expectation)',
                subItems: [
                  { id: '1004.1', text: '遵守標準與法規的合理期望' },
                  { id: '1004.2', text: '充分業務範圍的合理期望' },
                  { id: '1004.3', text: '管理層理解其職責的合理期望' },
                ],
              },
              {
                title: '1005 應有的職業謹慎 (Due Professional Care)',
                subItems: [{ id: '1005.1', text: '道德行為、職業謹慎與保密' }],
              },
              {
                title: '1006 專業勝任能力 (Proficiency)',
                subItems: [
                  { id: '1006.1', text: '確保團隊專業勝任能力' },
                  { id: '1006.2', text: '保持主題專業知識' },
                  { id: '1006.3', text: '追求持續專業發展' },
                ],
              },
              {
                title: '1007 斷言 (Assertions)',
                subItems: [{ id: '1007.1', text: '審查主題評估所依據的斷言' }],
              },
              {
                title: '1008 標準 (Criteria)',
                subItems: [
                  { id: '1008.1', text: '選擇適當的評估標準' },
                  { id: '1008.2', text: '確保標準的可接受性' },
                ],
              },
            ],
          },
          {
            category: '一般指南 (General Guidelines 2000系列)',
            items: [
              {
                title: '2001 審計章程 (Audit Charter)',
                subItems: [
                  { id: '2001.1', text: '簡介' },
                  { id: '2001.2', text: '審計章程內容' },
                ],
              },
              {
                title: '2002 組織獨立性 (Organizational Independence)',
                subItems: [
                  { id: '2002.1', text: '簡介' },
                  { id: '2002.2', text: '企業中的定位' },
                  { id: '2002.3', text: '報告層級' },
                  { id: '2002.4', text: '評估獨立性' },
                ],
              },
              {
                title: '2003 審計師客觀性 (Auditor Objectivity)',
                subItems: [
                  { id: '2003.1', text: '簡介' },
                  { id: '2003.2', text: '概念框架' },
                  { id: '2003.3', text: '威脅與防護措施' },
                  { id: '2003.4', text: '管理威脅' },
                  { id: '2003.5', text: '非審計服務或角色' },
                  { id: '2003.6', text: '不損害獨立性的非審計服務' },
                  { id: '2003.7', text: '損害獨立性的非審計服務' },
                  { id: '2003.8', text: '審計章程與非審計服務' },
                  { id: '2003.9', text: '報告' },
                ],
              },
              {
                title: '2004 合理期望 (Reasonable Expectation)',
                subItems: [
                  { id: '2004.1', text: '簡介' },
                  { id: '2004.2', text: '標準與法規' },
                  { id: '2004.3', text: '範圍' },
                  { id: '2004.4', text: '範圍限制' },
                  { id: '2004.5', text: '資訊' },
                  { id: '2004.6', text: '接受業務條款變更' },
                  { id: '2004.7', text: '其他考量' },
                ],
              },
              {
                title: '2005 應有的職業謹慎 (Due Professional Care)',
                subItems: [
                  { id: '2005.1', text: '簡介' },
                  { id: '2005.2', text: '職業懷疑與能力' },
                  { id: '2005.3', text: '應用' },
                  { id: '2005.4', text: '業務生命週期' },
                  { id: '2005.5', text: '溝通' },
                  { id: '2005.6', text: '獲取與管理資訊' },
                  { id: '2005.7', text: '其他考量' },
                ],
              },
              {
                title: '2006 專業勝任能力 (Proficiency)',
                subItems: [
                  { id: '2006.1', text: '簡介' },
                  { id: '2006.2', text: '專業能力' },
                  { id: '2006.3', text: '評估' },
                  { id: '2006.4', text: '達到期望能力' },
                  { id: '2006.5', text: '其他考量' },
                ],
              },
              {
                title: '2007 斷言 (Assertions)',
                subItems: [
                  { id: '2007.1', text: '簡介' },
                  { id: '2007.2', text: '斷言' },
                  { id: '2007.3', text: '主題標準' },
                  { id: '2007.4', text: '第三方開發的斷言' },
                  { id: '2007.5', text: '結論與報告' },
                  { id: '2007.6', text: '其他考量' },
                ],
              },
              {
                title: '2008 標準 (Criteria)',
                subItems: [
                  { id: '2008.1', text: '簡介' },
                  { id: '2008.2', text: '標準的選擇與使用' },
                  { id: '2008.3', text: '適用性' },
                  { id: '2008.4', text: '可接受性' },
                  { id: '2008.5', text: '來源' },
                  { id: '2008.6', text: '業務期間標準的變更' },
                ],
              },
            ],
          },
          {
            category: '執行標準 (Performance Standards 1200系列)',
            items: [
              {
                title: '1201 計畫中的風險評估 (Risk Assessment in Planning)',
                subItems: [
                  { id: '1201.1', text: '評估方法與資源分配' },
                  { id: '1201.2', text: '個別業務的風險識別與評估' },
                  { id: '1201.3', text: '考量主題風險與審計風險' },
                ],
              },
              {
                title: '1202 審計排程 (Audit Scheduling)',
                subItems: [
                  { id: '1202.1', text: '戰略審計計畫' },
                  { id: '1202.2', text: '治理批准與溝通' },
                  { id: '1202.3', text: '響應組織需求的排程' },
                ],
              },
              {
                title: '1203 業務計畫 (Engagement Planning)',
                subItems: [
                  { id: '1203.1', text: '業務規劃要求' },
                  { id: '1203.2', text: '制定並記錄審計程序' },
                ],
              },
              {
                title: '1204 執行與監督 (Performance and Supervision)',
                subItems: [
                  { id: '1204.1', text: '依據批准的計畫執行' },
                  { id: '1204.2', text: '提供適當的監督' },
                  { id: '1204.3', text: '接受勝任範圍內的任務' },
                  { id: '1204.4', text: '獲取並保存充分的證據' },
                  { id: '1204.5', text: '記錄審計過程與證據' },
                  { id: '1204.6', text: '透過根因分析支持結論' },
                  { id: '1204.7', text: '提供意見並揭露範圍限制' },
                ],
              },
              {
                title: '1205 證據 (Evidence)',
                subItems: [
                  { id: '1205.1', text: '獲取充分且適當的證據' },
                  { id: '1205.2', text: '評估證據的充分性' },
                  { id: '1205.3', text: '依據保留要求保存證據' },
                ],
              },
              {
                title:
                  '1206 利用其他專家的工作 (Using the Work of Other Experts)',
                subItems: [
                  { id: '1206.1', text: '考慮使用其他專家' },
                  { id: '1206.2', text: '評估專家資格與獨立性' },
                  { id: '1206.3', text: '審查並記錄專家工作' },
                  { id: '1206.4', text: '確定工作的充分性' },
                  { id: '1206.5', text: '報告專家貢獻' },
                  { id: '1206.6', text: '應用額外測試程序' },
                  { id: '1206.7', text: '提供意見與範圍限制' },
                ],
              },
              {
                title: '1207 違規與非法行為 (Irregularities and Illegal Acts)',
                subItems: [
                  { id: '1207.1', text: '考慮違規風險' },
                  { id: '1207.2', text: '溝通違規或非法行為' },
                ],
              },
            ],
          },
          {
            category: '執行指南 (Performance Guidelines 2200系列)',
            items: [
              {
                title: '2201 計畫中的風險評估 (Risk Assessment in Planning)',
                subItems: [
                  { id: '2201.1', text: '簡介' },
                  { id: '2201.2', text: 'IT審計計畫的風險評估' },
                  { id: '2201.3', text: '風險評估方法' },
                  { id: '2201.4', text: '個別業務的風險評估' },
                  { id: '2201.5', text: '審計風險' },
                  { id: '2201.6', text: '固有風險' },
                  { id: '2201.7', text: '控制風險' },
                  { id: '2201.8', text: '偵測風險' },
                  { id: '2201.9', text: '其他考量' },
                ],
              },
              {
                title: '2202 審計排程 (Audit Scheduling)',
                subItems: [
                  { id: '2202.1', text: '簡介' },
                  { id: '2202.2', text: '制定與維護審計範圍及排程' },
                  { id: '2202.3', text: '審計排程與業務規劃' },
                  { id: '2202.4', text: '其他考量' },
                ],
              },
              {
                title: '2203 業務計畫 (Engagement Planning)',
                subItems: [
                  { id: '2203.1', text: '簡介' },
                  { id: '2203.2', text: '目標' },
                  { id: '2203.3', text: '範圍與業務知識' },
                  { id: '2203.4', text: '風險導向方法' },
                  { id: '2203.5', text: '記錄計畫與程序' },
                  { id: '2203.6', text: '過程中的變更' },
                  { id: '2203.7', text: '其他考量' },
                ],
              },
              {
                title: '2204 執行與監督 (Performance and Supervision)',
                subItems: [
                  { id: '2204.1', text: '簡介' },
                  { id: '2204.2', text: '執行工作' },
                  { id: '2204.3', text: '角色、職責、知識與技能' },
                  { id: '2204.4', text: '監督' },
                  { id: '2204.5', text: '證據' },
                  { id: '2204.6', text: '記錄' },
                  { id: '2204.7', text: '發現事項' },
                  { id: '2204.8', text: '其他考量' },
                ],
              },
              {
                title: '2205 證據 (Evidence)',
                subItems: [
                  { id: '2205.1', text: '簡介' },
                  { id: '2205.2', text: '證據類型' },
                  { id: '2205.3', text: '獲取證據' },
                  { id: '2205.4', text: '評估證據' },
                  { id: '2205.5', text: '準備審計記錄' },
                  { id: '2205.6', text: '其他考量' },
                ],
              },
              {
                title:
                  '2206 利用其他專家的工作 (Using the Work of Other Experts)',
                subItems: [
                  { id: '2206.1', text: '簡介' },
                  { id: '2206.2', text: '考慮使用其他專家' },
                  { id: '2206.3', text: '評估專家充分性' },
                  { id: '2206.4', text: '規劃與審查專家工作' },
                  { id: '2206.5', text: '評估專家工作' },
                  { id: '2206.6', text: '額外測試程序' },
                  { id: '2206.7', text: '審計意見或結論' },
                  { id: '2206.8', text: '其他考量' },
                ],
              },
              {
                title: '2207 違規與非法行為 (Irregularities and Illegal Acts)',
                subItems: [
                  { id: '2207.1', text: '簡介' },
                  { id: '2207.2', text: '違規與非法行為' },
                  { id: '2207.3', text: '管理層職責' },
                  { id: '2207.4', text: '從業人員職責' },
                  { id: '2207.5', text: '規劃階段的違規與非法行為' },
                  { id: '2207.6', text: '設計與審查程序' },
                  { id: '2207.7', text: '回應違規與非法行為' },
                  { id: '2207.8', text: '內部報告' },
                  { id: '2207.9', text: '外部報告' },
                  { id: '2207.10', text: '其他考量' },
                ],
              },
            ],
          },
          {
            category: '報告標準 (Reporting Standards 1400系列)',
            items: [
              {
                title: '1401 報告 (Reporting)',
                subItems: [
                  { id: '1401.1', text: '報告業務結果' },
                  { id: '1401.2', text: '確保基於證據的發現' },
                ],
              },
              {
                title: '1402 後續追蹤活動 (Follow-up Activities)',
                subItems: [
                  { id: '1402.1', text: '監控與報告管理層進度' },
                  { id: '1402.2', text: '定期向審計委員會報告' },
                  { id: '1402.3', text: '超越風險偏好的風險接受升級' },
                ],
              },
            ],
          },
          {
            category: '報告指南 (Reporting Guidelines 2400系列)',
            items: [
              {
                title: '2401 報告 (Reporting)',
                subItems: [
                  { id: '2401.1', text: '簡介' },
                  { id: '2401.2', text: '報告的必要內容' },
                  { id: '2401.3', text: '期後事項' },
                  { id: '2401.4', text: '額外溝通' },
                  { id: '2401.5', text: '其他考量' },
                ],
              },
              {
                title: '2402 後續追蹤活動 (Follow-up Activities)',
                subItems: [
                  { id: '2402.1', text: '簡介' },
                  { id: '2402.2', text: '追蹤流程' },
                  { id: '2402.3', text: '管理層擬定行動' },
                  { id: '2402.4', text: '承擔不採取糾正行動的風險' },
                  { id: '2402.5', text: '追蹤程序' },
                  { id: '2402.6', text: '時間與排程' },
                  { id: '2402.7', text: '性質與範圍' },
                  { id: '2402.8', text: '延遲追蹤' },
                  { id: '2402.9', text: '追蹤回應的形式' },
                  { id: '2402.10', text: '對外部建議的追蹤' },
                  { id: '2402.11', text: '追蹤活動報告' },
                ],
              },
            ],
          },
        ],
        example: {
          tagLabel1: '指南ID',
          tagLabel2: '指南名稱',
          tagLabel3: '指南描述',
          id: '1001.1',
          name: '定義審計章程 (Define Audit Charter)',
          text: 'IT 審計與鑑證職能應在審計章程中正式定義，並明確規定其目的、職責、權限和問責制。根據組織的結構，該章程還可能描述分配給審計與鑑證職能的其他審計相關職責。',
        },
      },
      {
        id: 2,
        title: 'ITAF™ 配套執行指南 2208',
        subtitle: '資訊科技審計抽樣 (IT Audit Sampling)',
        description:
          '專門針對 ITAF™ 框架中「審計抽樣」環節編寫的配套操作指南，指導在無法進行 100% 測試時，如何科學地設計、選取及評估樣本。',
        downloadLink: 'https://drive.google.com/file/d/1kNpGvKysyF2HyXjgozRiKB-H7_C7e17o/view?usp=drive_link',
        accentColor: 'bg-indigo-600',
        lightColor: 'bg-indigo-50',
        textColor: 'text-indigo-600',
        corePointsTitle: '核心指南清單',
        categories: [
          {
            category: '2208 審計抽樣實踐指南',
            items: [
              {
                title: '2208.2 抽樣 (Sampling)',
                subItems: [
                  { id: '2208.2.1', text: '認知審查所有資訊的局限性' },
                  { id: '2208.2.2', text: '決定審計抽樣方法' },
                  { id: '2208.2.3', text: '識別不適合使用抽樣的情況' },
                ],
              },
              {
                title: '2208.3 樣本設計 (Design of the Sample)',
                subItems: [
                  { id: '2208.3.1', text: '對齊目標、風險與總體特徵' },
                  { id: '2208.3.2', text: '考量定義樣本設計的關鍵因素' },
                  {
                    id: '2208.3.3',
                    text: '確定抽樣目的(合規測試 vs 實質性測試)',
                  },
                  { id: '2208.3.4', text: '選擇合適的抽樣單元與方法' },
                  { id: '2208.3.5', text: '定義並驗證抽樣總體' },
                  { id: '2208.3.6', text: '應用分層優化抽樣設計' },
                  { id: '2208.3.7', text: '評估與管理抽樣風險' },
                  { id: '2208.3.8', text: '將抽樣風險與審計風險模型對齊' },
                  { id: '2208.3.9', text: '定義並應用可容忍誤差閾值' },
                  { id: '2208.3.10', text: '估計預期誤差以調整樣本大小' },
                  { id: '2208.3.11', text: '在複雜抽樣設計中聘用專家' },
                  { id: '2208.3.12', text: '透過雙重樣本結合控制與實質性測試' },
                  { id: '2208.3.13', text: '確定何時持續保證比抽樣更有效' },
                  { id: '2208.3.14', text: '應用 AI 與機器學習抽樣技術' },
                ],
              },
              {
                title: '2208.4 樣本選取 (Selection of the Sample)',
                subItems: [
                  {
                    id: '2208.4.1',
                    text: '驗證總體並控制選取過程以確保代表性',
                  },
                  { id: '2208.4.2', text: '使用統計抽樣' },
                  { id: '2208.4.3', text: '應用非統計抽樣' },
                  { id: '2208.4.4', text: '選擇適當的抽樣方法' },
                  { id: '2208.4.5', text: '匹配選取技術與總體屬性' },
                  { id: '2208.4.6', text: '附加考量-驗證數據分析與抽樣工具' },
                  {
                    id: '2208.4.7',
                    text: '附加考量-雲端與動態數據環境中的抽樣',
                  },
                ],
              },
              {
                title: '2208.5 結果評估 (Evaluation of Sample Results)',
                subItems: [
                  { id: '2208.5.1', text: '評估樣本中識別的誤差' },
                  { id: '2208.5.2', text: '當證據不可用時執行替代程序' },
                  { id: '2208.5.3', text: '與抽樣方法一致地推斷樣本結果' },
                  { id: '2208.5.4', text: '在總體背景下解釋非統計抽樣結果' },
                  {
                    id: '2208.5.5',
                    text: '評估抽樣結果是否超過可容忍誤差並重新評估風險',
                  },
                ],
              },
              {
                title: '2208.6 記錄文檔 (Documentation)',
                subItems: [
                  {
                    id: '2208.6.1',
                    text: '在工作底稿中清晰記錄抽樣目標、方法與結果',
                  },
                  { id: '2208.6.2', text: '品質審查與持續改進' },
                ],
              },
            ],
          },
        ],
        example: {
          tagLabel1: '指南ID',
          tagLabel2: '指南名稱',
          tagLabel3: '指南描述',
          id: '2208.2.1',
          name: '認知審查所有資訊的局限性',
          text: '在形成審計意見或結論時，從業人員通常不會檢查所有可用資訊的整個總體，因為這樣做可能不切實際或效率低下。當由於時間、資源或數據量等限制無法進行全面審查時，從業人員應採用適當的抽樣技術，以獲取支持可靠和可辯護結論的充分且適當的證據。',
        },
      },
    ],
    downloadText: '下載文檔',
    exampleSectionTitle: '典型指南示例',
    exampleSectionDesc:
      '請將滑鼠懸停在深色的標籤上，查看其在文檔原文中所對應的具體內容。這種結構化設計有助於審計人員快速定位核心要求與操作指南。',
    summaryTitle: '如何組合使用IT 審計框架ITAF™？',
    summaryDesc:
      '先以 ITAF™ 5th Edition 為「主體框架」，確保您的審計計畫、道德規範與報告流程符合全局標準。當在具體執行階段需要對海量數據進行抽樣驗證時，請參考 Guideline 2208 作為「專項工具手冊」，科學地設計樣本並評估結果。',
    sum1: '確保全局合規性',
    sum2: '提升抽樣準確度',
    sum3: '降低審計風險',
  },
  en: {
    header: {
      badge: 'ISACA Professional Guidance',
      title: 'ISACA IT Audit Framework ITAF™ 5th Edition Guide',
      introTitle: 'What is ITAF™?',
      introDesc:
        'The Information Technology Audit Framework (ITAF™) is a comprehensive global framework published by ISACA. It clearly defines the roles, responsibilities, code of ethics, and necessary knowledge and skills for IT audit and assurance professionals.',
      industryStatusTitle: 'Industry Status',
      industryStatusDesc:
        "ITAF™ is globally recognized as the 'gold standard' in the IT audit field. It provides a consistent, objective, and highly structured methodology for global enterprises, ensuring that audit results possess high reliability, transparency, and business value.",
    },
    docs: [
      {
        id: 1,
        title: 'IT Audit Framework (ITAF™) 5th Edition',
        subtitle: 'Core Framework for IT Audit Professional Practices',
        description:
          'This framework provides practitioners with mandatory Standards, recommended Guidelines, and auxiliary Tools and Techniques to ensure the quality, objectivity, and consistency of audit work.',
        downloadLink: 'https://drive.google.com/file/d/1kNpGvKysyF2HyXjgozRiKB-H7_C7e17o/view?usp=drive_link',
        accentColor: 'bg-blue-600',
        lightColor: 'bg-blue-50',
        textColor: 'text-blue-600',
        corePointsTitle: 'Core Guidelines List',
        categories: [
          {
            category: 'General Standards (1000 Series)',
            items: [
              {
                title: '1001 Audit Charter',
                subItems: [
                  { id: '1001.1', text: 'Define Audit Charter' },
                  { id: '1001.2', text: 'Approval of the Audit Charter' },
                  { id: '1001.3', text: 'Communication of the Audit Charter' },
                  {
                    id: '1001.4',
                    text: 'Periodic Review and Alignment of the Audit Charter',
                  },
                ],
              },
              {
                title: '1002 Organizational Independence',
                subItems: [
                  {
                    id: '1002.1',
                    text: 'Free from Undue Influence and Conflict of Interest',
                  },
                  {
                    id: '1002.2',
                    text: 'Functional Reporting for Independence',
                  },
                  {
                    id: '1002.3',
                    text: 'Administrative Reporting for Performance',
                  },
                ],
              },
              {
                title: '1003 Auditor Objectivity',
                subItems: [
                  {
                    id: '1003.1',
                    text: 'Objectivity in IT Audit and Assurance Engagements',
                  },
                ],
              },
              {
                title: '1004 Reasonable Expectation',
                subItems: [
                  {
                    id: '1004.1',
                    text: 'Reasonable Expectation of Compliance with Standards and Regulations',
                  },
                  {
                    id: '1004.2',
                    text: 'Reasonable Expectation of Adequate Engagement Scope',
                  },
                  {
                    id: '1004.3',
                    text: "Reasonable Expectation of Management's Understanding of its Responsibilities",
                  },
                ],
              },
              {
                title: '1005 Due Professional Care',
                subItems: [
                  {
                    id: '1005.1',
                    text: 'Ethical Conduct, Due Care, and Confidentiality',
                  },
                ],
              },
              {
                title: '1006 Proficiency',
                subItems: [
                  {
                    id: '1006.1',
                    text: 'Ensure Collective Professional Competence',
                  },
                  { id: '1006.2', text: 'Maintain Subject Matter Expertise' },
                  {
                    id: '1006.3',
                    text: 'Pursue Ongoing Professional Development',
                  },
                ],
              },
              {
                title: '1007 Assertions',
                subItems: [
                  {
                    id: '1007.1',
                    text: 'Review the assertions against which the subject matter will be assessed',
                  },
                ],
              },
              {
                title: '1008 Criteria',
                subItems: [
                  {
                    id: '1008.1',
                    text: 'Select Appropriate Assessment Criteria',
                  },
                  { id: '1008.2', text: 'Ensure Acceptability of Criteria' },
                ],
              },
            ],
          },
          {
            category: 'General Guidelines (2000 Series)',
            items: [
              {
                title: '2001 Audit Charter',
                subItems: [
                  { id: '2001.1', text: 'Introduction' },
                  { id: '2001.2', text: 'Contents of Audit Charter' },
                ],
              },
              {
                title: '2002 Organizational Independence',
                subItems: [
                  { id: '2002.1', text: 'Introduction' },
                  { id: '2002.2', text: 'Position in the Enterprise' },
                  { id: '2002.3', text: 'Reporting Level' },
                  { id: '2002.4', text: 'Assessing Independence' },
                ],
              },
              {
                title: '2003 Auditor Objectivity',
                subItems: [
                  { id: '2003.1', text: 'Introduction' },
                  { id: '2003.2', text: 'Conceptual Framework' },
                  { id: '2003.3', text: 'Threats and Safeguards' },
                  { id: '2003.4', text: 'Managing Threats' },
                  { id: '2003.5', text: 'Nonaudit Services or Roles' },
                  {
                    id: '2003.6',
                    text: 'Nonaudit Services That Do Not Impair Independence',
                  },
                  {
                    id: '2003.7',
                    text: 'Nonaudit Services That Do Impair Independence',
                  },
                  {
                    id: '2003.8',
                    text: 'Audit Charter and Nonaudit Services/Advisory Roles',
                  },
                  { id: '2003.9', text: 'Reporting' },
                ],
              },
              {
                title: '2004 Reasonable Expectation',
                subItems: [
                  { id: '2004.1', text: 'Introduction' },
                  { id: '2004.2', text: 'Standards and Regulations' },
                  { id: '2004.3', text: 'Scope' },
                  { id: '2004.4', text: 'Scope Limitations' },
                  { id: '2004.5', text: 'Information' },
                  {
                    id: '2004.6',
                    text: 'Acceptance of a Change in Engagement Terms',
                  },
                  { id: '2004.7', text: 'Other Considerations' },
                ],
              },
              {
                title: '2005 Due Professional Care',
                subItems: [
                  { id: '2005.1', text: 'Introduction' },
                  {
                    id: '2005.2',
                    text: 'Professional Skepticism and Competency',
                  },
                  { id: '2005.3', text: 'Application' },
                  { id: '2005.4', text: 'Life Cycle of the Engagement' },
                  { id: '2005.5', text: 'Communication' },
                  { id: '2005.6', text: 'Obtaining and Managing Information' },
                  { id: '2005.7', text: 'Other Considerations' },
                ],
              },
              {
                title: '2006 Proficiency',
                subItems: [
                  { id: '2006.1', text: 'Introduction' },
                  { id: '2006.2', text: 'Professional Competence' },
                  { id: '2006.3', text: 'Evaluation' },
                  {
                    id: '2006.4',
                    text: 'Reaching the Desired Level of Competence',
                  },
                  { id: '2006.5', text: 'Other Considerations' },
                ],
              },
              {
                title: '2007 Assertions',
                subItems: [
                  { id: '2007.1', text: 'Introduction' },
                  { id: '2007.2', text: 'Assertions' },
                  { id: '2007.3', text: 'Subject Matter Criteria' },
                  {
                    id: '2007.4',
                    text: 'Assertions Developed by Third Parties',
                  },
                  { id: '2007.5', text: 'Conclusion and Report' },
                  { id: '2007.6', text: 'Other Considerations' },
                ],
              },
              {
                title: '2008 Criteria',
                subItems: [
                  { id: '2008.1', text: 'Introduction' },
                  { id: '2008.2', text: 'Selection and Use of Criteria' },
                  { id: '2008.3', text: 'Suitability' },
                  { id: '2008.4', text: 'Acceptability' },
                  { id: '2008.5', text: 'Source' },
                  {
                    id: '2008.6',
                    text: 'Change in Criteria During the Audit Engagement',
                  },
                ],
              },
            ],
          },
          {
            category: 'Performance Standards (1200 Series)',
            items: [
              {
                title: '1201 Risk Assessment in Planning',
                subItems: [
                  {
                    id: '1201.1',
                    text: 'Risk Assessment Approach for IT Audit Planning and Resource Allocation',
                  },
                  {
                    id: '1201.2',
                    text: 'Risk Identification and Assessment for Individual Engagements',
                  },
                  {
                    id: '1201.3',
                    text: 'Consideration of Subject Matter and Audit Risk in Engagement Planning',
                  },
                ],
              },
              {
                title: '1202 Audit Scheduling',
                subItems: [
                  { id: '1202.1', text: 'Strategic Audit Planning' },
                  {
                    id: '1202.2',
                    text: 'Governance Approval and Communication',
                  },
                  {
                    id: '1202.3',
                    text: 'Responsive Scheduling to Organizational Needs',
                  },
                ],
              },
              {
                title: '1203 Engagement Planning',
                subItems: [
                  {
                    id: '1203.1',
                    text: 'IT Audit and Assurance Engagement Planning Requirements',
                  },
                  {
                    id: '1203.2',
                    text: 'Develop and Document IT Audit and Assurance Engagement Program',
                  },
                ],
              },
              {
                title: '1204 Performance and Supervision',
                subItems: [
                  {
                    id: '1204.1',
                    text: 'Execute Audit Work in Accordance with the Approved Plan',
                  },
                  {
                    id: '1204.2',
                    text: 'Provide Adequate Supervision of Audit Staff',
                  },
                  {
                    id: '1204.3',
                    text: 'Accept Tasks Within Competence or Obtain Required Skills',
                  },
                  {
                    id: '1204.4',
                    text: 'Obtain and Preserve Sufficient and Appropriate Audit Evidence',
                  },
                  {
                    id: '1204.5',
                    text: 'Document Audit Process, Work Performed, and Supporting Evidence',
                  },
                  {
                    id: '1204.6',
                    text: 'Support Findings and Conclusions with Root Cause Analysis',
                  },
                  {
                    id: '1204.7',
                    text: 'Provide Audit Opinion or Conclusion and Disclose Scope Limitations',
                  },
                ],
              },
              {
                title: '1205 Evidence',
                subItems: [
                  {
                    id: '1205.1',
                    text: 'Obtain Sufficient and Appropriate Evidence',
                  },
                  { id: '1205.2', text: 'Evaluate Sufficiency of Evidence' },
                  {
                    id: '1205.3',
                    text: 'Preserve Evidence per Retention Requirements',
                  },
                ],
              },
              {
                title: '1206 Using the Work of Other Experts',
                subItems: [
                  { id: '1206.1', text: 'Consider Use of Other Experts' },
                  { id: '1206.2', text: 'Assess Expert Qualifications' },
                  { id: '1206.3', text: 'Review and Document Expert Work' },
                  {
                    id: '1206.4',
                    text: 'Determine Adequacy for Engagement Objectives',
                  },
                  { id: '1206.5', text: 'Report on Expert Contributions' },
                  { id: '1206.6', text: 'Apply Additional Test Procedures' },
                  {
                    id: '1206.7',
                    text: 'Provide Opinion and Address Scope Limitations',
                  },
                ],
              },
              {
                title: '1207 Irregularities and Illegal Acts',
                subItems: [
                  {
                    id: '1207.1',
                    text: 'Consider the Risk of Irregularities and Illegal Acts',
                  },
                  {
                    id: '1207.2',
                    text: 'Communicate Irregularities or Illegal Acts',
                  },
                ],
              },
            ],
          },
          {
            category: 'Performance Guidelines (2200 Series)',
            items: [
              {
                title: '2201 Risk Assessment in Planning',
                subItems: [
                  { id: '2201.1', text: 'Introduction' },
                  {
                    id: '2201.2',
                    text: 'Risk Assessment of the IT Audit Plan',
                  },
                  { id: '2201.3', text: 'Risk Assessment Methodology' },
                  {
                    id: '2201.4',
                    text: 'Risk Assessment of Individual Engagements',
                  },
                  { id: '2201.5', text: 'Audit Risk' },
                  { id: '2201.6', text: 'Inherent Risk' },
                  { id: '2201.7', text: 'Control Risk' },
                  { id: '2201.8', text: 'Detection Risk' },
                  { id: '2201.9', text: 'Other Considerations' },
                ],
              },
              {
                title: '2202 Audit Scheduling',
                subItems: [
                  { id: '2202.1', text: 'Introduction' },
                  {
                    id: '2202.2',
                    text: 'Developing and Maintaining the Audit Universe and Schedule',
                  },
                  {
                    id: '2202.3',
                    text: 'Audit Schedule and Engagement Planning',
                  },
                  { id: '2202.4', text: 'Other Considerations' },
                ],
              },
              {
                title: '2203 Engagement Planning',
                subItems: [
                  { id: '2203.1', text: 'Introduction' },
                  { id: '2203.2', text: 'Objectives' },
                  { id: '2203.3', text: 'Scope and Business Knowledge' },
                  { id: '2203.4', text: 'Risk-Based Approach' },
                  {
                    id: '2203.5',
                    text: 'Documenting the Audit Project Plan and Audit Program',
                  },
                  {
                    id: '2203.6',
                    text: 'Changes During the Course of the Audit',
                  },
                  { id: '2203.7', text: 'Other Considerations' },
                ],
              },
              {
                title: '2204 Performance and Supervision',
                subItems: [
                  { id: '2204.1', text: 'Introduction' },
                  { id: '2204.2', text: 'Performing the Work' },
                  {
                    id: '2204.3',
                    text: 'Roles, Responsibilities, Knowledge, and Skills',
                  },
                  { id: '2204.4', text: 'Supervision' },
                  { id: '2204.5', text: 'Evidence' },
                  { id: '2204.6', text: 'Documenting' },
                  { id: '2204.7', text: 'Findings' },
                  { id: '2204.8', text: 'Other Considerations' },
                ],
              },
              {
                title: '2205 Evidence',
                subItems: [
                  { id: '2205.1', text: 'Introduction' },
                  { id: '2205.2', text: 'Types of Evidence' },
                  { id: '2205.3', text: 'Obtaining Evidence' },
                  { id: '2205.4', text: 'Evaluating Evidence' },
                  { id: '2205.5', text: 'Preparing Audit Documentation' },
                  { id: '2205.6', text: 'Other Considerations' },
                ],
              },
              {
                title: '2206 Using the Work of Other Experts',
                subItems: [
                  { id: '2206.1', text: 'Introduction' },
                  {
                    id: '2206.2',
                    text: 'Considering the Use of Work of Other Experts',
                  },
                  {
                    id: '2206.3',
                    text: 'Assessing the Adequacy of Other Experts',
                  },
                  {
                    id: '2206.4',
                    text: 'Planning and Reviewing the Work of Other Experts',
                  },
                  {
                    id: '2206.5',
                    text: 'Evaluating the Work of Other Experts',
                  },
                  { id: '2206.6', text: 'Additional Test Procedures' },
                  { id: '2206.7', text: 'Audit Opinion or Conclusion' },
                  { id: '2206.8', text: 'Other Considerations' },
                ],
              },
              {
                title: '2207 Irregularities and Illegal Acts',
                subItems: [
                  { id: '2207.1', text: 'Introduction' },
                  { id: '2207.2', text: 'Irregularities and Illegal Acts' },
                  { id: '2207.3', text: 'Responsibilities of Management' },
                  { id: '2207.4', text: 'Responsibilities of Practitioners' },
                  { id: '2207.5', text: 'During Engagement Planning' },
                  {
                    id: '2207.6',
                    text: 'Designing and Reviewing Engagement Procedures',
                  },
                  {
                    id: '2207.7',
                    text: 'Responding to Irregularities and Illegal Acts',
                  },
                  { id: '2207.8', text: 'Internal Reporting' },
                  { id: '2207.9', text: 'External Reporting' },
                  { id: '2207.10', text: 'Other Considerations' },
                ],
              },
            ],
          },
          {
            category: 'Reporting Standards (1400 Series)',
            items: [
              {
                title: '1401 Reporting',
                subItems: [
                  { id: '1401.1', text: 'Report Engagement Results' },
                  { id: '1401.2', text: 'Evidence-Based Findings' },
                ],
              },
              {
                title: '1402 Follow-up Activities',
                subItems: [
                  {
                    id: '1402.1',
                    text: "Monitor and Report on Management's Progress",
                  },
                  {
                    id: '1402.2',
                    text: 'Regular Reporting to the Audit Committee',
                  },
                  {
                    id: '1402.3',
                    text: 'Escalation of Risk Acceptance Beyond Risk Appetite',
                  },
                ],
              },
            ],
          },
          {
            category: 'Reporting Guidelines (2400 Series)',
            items: [
              {
                title: '2401 Reporting',
                subItems: [
                  { id: '2401.1', text: 'Introduction' },
                  {
                    id: '2401.2',
                    text: 'Required Contents of the Audit Report',
                  },
                  { id: '2401.3', text: 'Subsequent Events' },
                  { id: '2401.4', text: 'Additional Communication' },
                  { id: '2401.5', text: 'Other Considerations' },
                ],
              },
              {
                title: '2402 Follow-up Activities',
                subItems: [
                  { id: '2402.1', text: 'Introduction' },
                  { id: '2402.2', text: 'Follow-up Process' },
                  { id: '2402.3', text: "Management's Proposed Actions" },
                  {
                    id: '2402.4',
                    text: 'Assuming the Risk of Not Taking Corrective Action',
                  },
                  { id: '2402.5', text: 'Follow-up Procedures' },
                  {
                    id: '2402.6',
                    text: 'Timing and Scheduling of Follow-up Activities',
                  },
                  {
                    id: '2402.7',
                    text: 'Nature and Extent of Follow-up Activities',
                  },
                  { id: '2402.8', text: 'Deferring Follow-up Activities' },
                  { id: '2402.9', text: 'Form of Follow-up Responses' },
                  {
                    id: '2402.10',
                    text: 'Follow-up by Practitioners on External Audit Recommendations',
                  },
                  { id: '2402.11', text: 'Reporting of Follow-up Activities' },
                ],
              },
            ],
          },
        ],
        example: {
          tagLabel1: 'Guideline ID',
          tagLabel2: 'Guideline Name',
          tagLabel3: 'Guideline Description',
          id: '1001.1',
          name: 'Define Audit Charter',
          text: 'The IT audit and assurance function shall be formally defined in an audit charter that sets out its purpose, responsibilities, authority, and accountability. Depending on the organization’s structure, this charter may also describe additional audit-related responsibilities assigned to the audit and assurance function.',
        },
      },
      {
        id: 2,
        title: 'ITAF™ Companion Guideline 2208',
        subtitle: 'Information Technology Audit Sampling',
        description:
          "A companion operational guide specifically addressing the 'Audit Sampling' phase within the ITAF™ framework, providing guidance on scientifically designing, selecting, and evaluating samples when 100% testing is unfeasible.",
        downloadLink: 'https://drive.google.com/file/d/1mBh5XfdYDOpJKNyU0VzopKc3nhhJcodB/view?usp=drive_link',
        accentColor: 'bg-indigo-600',
        lightColor: 'bg-indigo-50',
        textColor: 'text-indigo-600',
        corePointsTitle: 'Core Guidelines List',
        categories: [
          {
            category: '2208 Information Technology Audit Sampling',
            items: [
              {
                title: '2208.2 Sampling',
                subItems: [
                  {
                    id: '2208.2.1',
                    text: 'Recognize the Limitations of Reviewing All Information',
                  },
                  {
                    id: '2208.2.2',
                    text: 'Determine Audit Sampling Method to Reach Appropriate Conclusions',
                  },
                  {
                    id: '2208.2.3',
                    text: 'Identify Situations Where it is Inappropriate to Use Sampling',
                  },
                ],
              },
              {
                title: '2208.3 Design of the Sample',
                subItems: [
                  {
                    id: '2208.3.1',
                    text: 'Design an Audit Sample Aligned with Objectives, Risk, and Population Characteristics',
                  },
                  {
                    id: '2208.3.2',
                    text: 'Consider Key Factors When Defining the Sample Design',
                  },
                  {
                    id: '2208.3.3',
                    text: 'Determine the Purpose of the Sample-Compliance vs. Substantive Testing',
                  },
                  {
                    id: '2208.3.4',
                    text: 'Select the Appropriate Sampling Unit and Method',
                  },
                  {
                    id: '2208.3.5',
                    text: 'Define and Validate the Population for Sampling',
                  },
                  {
                    id: '2208.3.6',
                    text: 'Apply Stratification to Optimize Sampling Design',
                  },
                  { id: '2208.3.7', text: 'Evaluate and Manage Sampling Risk' },
                  {
                    id: '2208.3.8',
                    text: 'Align Sampling Risk with the Audit Risk Model Components',
                  },
                  {
                    id: '2208.3.9',
                    text: 'Define and Apply Tolerable Error Thresholds',
                  },
                  {
                    id: '2208.3.10',
                    text: 'Estimate Expected Error to Adjust Sample Size',
                  },
                  {
                    id: '2208.3.11',
                    text: 'Engage Specialists for Complex Sampling Designs',
                  },
                  {
                    id: '2208.3.12',
                    text: 'Combine Control and Substantive Testing Through Dual Samples',
                  },
                  {
                    id: '2208.3.13',
                    text: 'Determine When Continuous Assurance is More Effective Than Sampling',
                  },
                  {
                    id: '2208.3.14',
                    text: 'Apply AI and Machine Learning Enabled Sampling Techniques',
                  },
                ],
              },
              {
                title: '2208.4 Selection of the Sample',
                subItems: [
                  {
                    id: '2208.4.1',
                    text: 'Verify the Population and Control Sample Selection to Ensure Representativeness',
                  },
                  {
                    id: '2208.4.2',
                    text: 'Use Statistical Sampling to Ensure Representativeness',
                  },
                  {
                    id: '2208.4.3',
                    text: 'Apply Nonstatistical Sampling with Professional Judgment',
                  },
                  {
                    id: '2208.4.4',
                    text: 'Select Appropriate Sampling Methods for the Engagement',
                  },
                  {
                    id: '2208.4.5',
                    text: 'Match Selection Techniques to Population Attributes',
                  },
                  {
                    id: '2208.4.6',
                    text: 'Additional Considerations-Validate Data Analytics and Sampling Tools',
                  },
                  {
                    id: '2208.4.7',
                    text: 'Additional Considerations-Sampling in Cloud-Based and Dynamic Data Environments',
                  },
                ],
              },
              {
                title: '2208.5 Evaluation of Sample Results',
                subItems: [
                  {
                    id: '2208.5.1',
                    text: 'Evaluate Errors Identified in the Sample',
                  },
                  {
                    id: '2208.5.2',
                    text: 'Perform Alternative Procedures When Evidence Is Unavailable',
                  },
                  {
                    id: '2208.5.3',
                    text: 'Extrapolate Sample Results in Line with the Sampling Approach',
                  },
                  {
                    id: '2208.5.4',
                    text: 'Interpret Nonstatistical Sampling Results Within the Population Context',
                  },
                  {
                    id: '2208.5.5',
                    text: 'Evaluate Sampling Results Against Tolerable Error and Reassess Sampling Risk',
                  },
                ],
              },
              {
                title: '2208.6 Documentation',
                subItems: [
                  {
                    id: '2208.6.1',
                    text: 'Document Sampling Objectives, Methodology, and Results Clearly in Work Papers',
                  },
                  {
                    id: '2208.6.2',
                    text: 'Quality Review and Continuous Improvement',
                  },
                ],
              },
            ],
          },
        ],
        example: {
          tagLabel1: 'Guideline ID',
          tagLabel2: 'Guideline Name',
          tagLabel3: 'Guideline Description',
          id: '2208.2.1',
          name: 'Recognize the Limitations of Reviewing All Information',
          text: 'In forming an audit opinion or conclusion, practitioners often do not examine the entire population of available information, as doing so may be impractical or inefficient. When a full review is not feasible due to constraints such as time, resources, or data volume, practitioners should apply appropriate sampling techniques to obtain sufficient and appropriate evidence that supports reliable and defensible conclusions.',
        },
      },
    ],
    downloadText: 'Download Document',
    exampleSectionTitle: 'Typical Guideline Example',
    exampleSectionDesc:
      'Hover your mouse over the dark labels to see the corresponding content highlighted in the original text. This structured design helps auditors quickly locate core requirements and operational guidance.',
    summaryTitle: 'How to Use the IT Audit Framework ITAF™?',
    summaryDesc:
      "First, use the ITAF™ 5th Edition as your 'Main Framework' to ensure your audit plans, ethics, and reporting processes comply with global standards. Then, when executing procedures that require sampling massive datasets, refer to Guideline 2208 as your 'Specialized Toolkit' to scientifically design samples and evaluate results.",
    sum1: 'Ensure Global Compliance',
    sum2: 'Improve Sampling Accuracy',
    sum3: 'Reduce Audit Risk',
  },
};

// Component imitating the NIST 800-53 Control Structure style highlighting
const InteractiveStructure = ({ exampleData, accentColor, lang }) => {
  const [hoveredNode, setHoveredNode] = useState(null);

  const activeClass = `bg-yellow-100 ring-2 ring-yellow-400 text-slate-900 transition-all duration-300`;
  const defaultClass = `bg-transparent text-slate-800 transition-all duration-300`;

  return (
    <div className="mt-4 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      {/* 模擬官方文檔的表頭 */}
      <div className="bg-slate-100 px-6 py-3 border-b border-slate-200 font-bold text-slate-600 text-center tracking-wider text-sm uppercase">
        {lang === 'zh'
          ? 'Statements / Guidelines (條款 / 指南)'
          : 'Statements / Guidelines'}
      </div>

      <div className="flex flex-col md:flex-row">
        {/* 左側欄：ID */}
        <div className="w-full md:w-1/4 p-6 border-b md:border-b-0 md:border-r border-slate-200 bg-slate-50/50 flex flex-col items-start gap-3">
          <div
            className={`px-3 py-1 text-xs font-bold text-white rounded cursor-pointer shadow-md inline-block ${accentColor} hover:scale-105 transition-transform`}
            onMouseEnter={() => setHoveredNode('id')}
            onMouseLeave={() => setHoveredNode(null)}
          >
            {exampleData.tagLabel1}
          </div>
          <div
            className={`p-2 -ml-2 rounded font-mono font-bold text-lg ${
              hoveredNode === 'id' ? activeClass : defaultClass
            }`}
          >
            {exampleData.id}
          </div>
        </div>

        {/* 右側欄：名稱 + 描述文本 */}
        <div className="w-full md:w-3/4 p-6 flex flex-col gap-6">
          {/* 名稱區塊 */}
          <div className="flex flex-col items-start gap-2">
            <div
              className={`px-3 py-1 text-xs font-bold text-white rounded cursor-pointer shadow-md inline-block ${accentColor} hover:scale-105 transition-transform`}
              onMouseEnter={() => setHoveredNode('name')}
              onMouseLeave={() => setHoveredNode(null)}
            >
              {exampleData.tagLabel2}
            </div>
            <div
              className={`p-2 -ml-2 rounded font-bold text-xl w-full ${
                hoveredNode === 'name' ? activeClass : defaultClass
              }`}
            >
              {exampleData.name}
            </div>
          </div>

          {/* 描述區塊 */}
          <div className="flex flex-col items-start gap-2">
            <div
              className={`px-3 py-1 text-xs font-bold text-white rounded cursor-pointer shadow-md inline-block ${accentColor} hover:scale-105 transition-transform`}
              onMouseEnter={() => setHoveredNode('text')}
              onMouseLeave={() => setHoveredNode(null)}
            >
              {exampleData.tagLabel3}
            </div>
            <div
              className={`p-3 -ml-3 rounded leading-relaxed text-base w-full ${
                hoveredNode === 'text' ? activeClass : 'text-slate-600'
              }`}
            >
              {exampleData.text}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [lang, setLang] = useState('zh');
  const t = data[lang];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-blue-200">
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9; 
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1; 
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8; 
        }
      `}</style>

      {/* Header with Language Toggle */}
      <nav className="absolute top-0 w-full p-6 flex justify-end z-50">
        <button
          onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
          className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full border border-white/30 transition-all font-medium shadow-sm"
        >
          <Globe className="w-4 h-4" />
          {lang === 'zh' ? 'English' : '繁體中文'}
        </button>
      </nav>

      {/* Hero Section */}
      <header className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-950 text-white py-24 px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 mb-8">
            <BookOpen className="w-5 h-5 text-blue-300" />
            <span className="text-sm font-bold tracking-wider text-blue-100 uppercase">
              {t.header.badge}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-12 leading-tight tracking-tight">
            {t.header.title}
          </h1>

          {/* ITAF Intro Box */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-4xl bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-2xl">
            <div>
              <div className="flex items-center gap-2 mb-3 text-blue-300">
                <Info className="w-5 h-5" />
                <h3 className="text-lg font-bold">{t.header.introTitle}</h3>
              </div>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                {t.header.introDesc}
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-3 text-indigo-300">
                <ShieldCheck className="w-5 h-5" />
                <h3 className="text-lg font-bold">
                  {t.header.industryStatusTitle}
                </h3>
              </div>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                {t.header.industryStatusDesc}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 lg:px-12 py-16 -mt-10 relative z-20">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
          {t.docs.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden flex flex-col transition-transform hover:-translate-y-1 duration-300"
            >
              {/* Card Header */}
              <div
                className={`${doc.lightColor} p-8 border-b border-slate-100 relative overflow-hidden flex-shrink-0`}
              >
                <div
                  className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-white/50 to-transparent rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl`}
                ></div>
                <h2
                  className={`text-2xl font-bold mb-2 leading-snug ${doc.textColor}`}
                >
                  {doc.title}
                </h2>
                <p className="text-slate-700 font-semibold text-lg">
                  {doc.subtitle}
                </p>
              </div>

              {/* Card Body */}
              <div className="p-8 flex-grow flex flex-col">
                <p className="text-slate-600 mb-8 leading-relaxed text-base">
                  {doc.description}
                </p>

                {/* Hierarchical Guidelines List */}
                <div className="flex-grow mb-10">
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 pb-2 mb-4">
                    {doc.corePointsTitle}
                  </h4>
                  <div className="overflow-y-auto max-h-[500px] pr-3 custom-scrollbar">
                    {doc.categories.map((cat, catIdx) => (
                      <div key={catIdx} className="mb-8 last:mb-2">
                        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur py-2 mb-3">
                          <h5
                            className={`font-bold text-sm uppercase tracking-wide px-3 py-2 rounded-lg border-l-4 ${doc.lightColor} ${doc.textColor}`}
                            style={{ borderLeftColor: 'currentColor' }}
                          >
                            {cat.category}
                          </h5>
                        </div>
                        <div className="space-y-6 pl-2">
                          {cat.items.map((item, itemIdx) => (
                            <div key={itemIdx}>
                              <div className="font-bold text-slate-800 mb-3 flex items-start gap-2">
                                <div
                                  className={`mt-1.5 w-1.5 h-1.5 flex-shrink-0 rounded-full ${doc.textColor.replace(
                                    'text-',
                                    'bg-'
                                  )}`}
                                ></div>
                                <span>{item.title}</span>
                              </div>
                              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-4">
                                {item.subItems.map((sub, subIdx) => (
                                  <li
                                    key={subIdx}
                                    className="flex flex-row items-start gap-2.5 bg-slate-50 border border-slate-100 p-3 rounded-lg hover:bg-slate-100 transition-colors"
                                  >
                                    <span
                                      className={`font-mono font-bold text-xs px-2 py-0.5 rounded-md bg-white border border-slate-200 flex-shrink-0 ${doc.textColor} shadow-sm mt-px`}
                                    >
                                      {sub.id}
                                    </span>
                                    <span className="text-sm text-slate-600 leading-snug">
                                      {sub.text}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Example Section */}
                <div className="mb-8 mt-auto">
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 pb-2 mb-4">
                    {t.exampleSectionTitle}
                  </h4>
                  <p className="text-xs text-slate-500 mb-2">
                    {t.exampleSectionDesc}
                  </p>
                  <InteractiveStructure
                    exampleData={doc.example}
                    accentColor={doc.accentColor}
                    lang={lang}
                  />
                </div>

                {/* Download Button */}
                <a
                  href={doc.downloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full group flex items-center justify-center gap-3 py-4 px-6 rounded-xl text-white font-bold transition-all duration-200 shadow-md hover:shadow-xl focus:ring-4 focus:outline-none ${doc.accentColor} hover:opacity-90`}
                >
                  <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                  {t.downloadText}
                  <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Summary Banner */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl border border-slate-700">
          <div className="max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {t.summaryTitle}
            </h3>
            <p className="text-slate-300 leading-relaxed text-lg">
              {t.summaryDesc}
            </p>
          </div>
          <div className="flex-shrink-0 bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4 min-w-[240px] backdrop-blur-sm">
            <div className="flex items-center gap-3 text-emerald-400 bg-emerald-400/10 px-4 py-2 rounded-lg">
              <CheckCircle2 className="w-5 h-5" />
              <span className="font-bold text-white">{t.sum1}</span>
            </div>
            <div className="flex items-center gap-3 text-blue-400 bg-blue-400/10 px-4 py-2 rounded-lg">
              <CheckCircle2 className="w-5 h-5" />
              <span className="font-bold text-white">{t.sum2}</span>
            </div>
            <div className="flex items-center gap-3 text-indigo-400 bg-indigo-400/10 px-4 py-2 rounded-lg">
              <CheckCircle2 className="w-5 h-5" />
              <span className="font-bold text-white">{t.sum3}</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-10 text-center text-slate-500 text-sm">
        <p>
          © 2026 IT Audit Compliance Dashboard. Powered by ISACA ITAF™
          Framework.
        </p>
      </footer>
    </div>
  );
}
