var tipuesearch = {"pages": [{'title': 'About', 'text': '網站倉儲: https://40923149r.github.io/cd2022/content/index.html \n 課程網誌: https://github.com/40923149r/cd2022 \n \n   \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'Note', 'text': '', 'tags': '', 'url': 'Note.html'}, {'title': '建立倉儲', 'text': '先進去老師倉儲的cmsimde site， 複製網址 \n \n 到Create a new repository點開import a repository \n \n 貼上剛剛複製的網址，Repository Name設為 cd2022 \n \n 接著到小黑窗 \n cd tmp \n git clone --recurse-submodules https://github.com/40923149/cd2022.git \n cd cd2022 \n cms \n 複製網址  https://127.0.0.1:9443/  就可以開啟倉儲了。 \n', 'tags': '', 'url': '建立倉儲.html'}, {'title': 'tokens', 'text': '到 developer setting \xa0中 創建 一個 沒有期限 的token並且將下面選項都打勾之後會出現一串文字碼 \n \n \n 開啟config到白窗，複製貼上指令然後儲存。接著到小黑窗 acp ，檢查完成。 \n \n', 'tags': '', 'url': 'tokens.html'}, {'title': 'Wink影片上傳', 'text': '影片做完時，會 有四個檔案 \n \n 把隨身碟裡的 JavaScript指令檔拉到gogle 。 \n \n 複製起來 ，開頭增加 <script> ，結尾增加 </script> 如下 <script> var winkVideoData = {\n  dataVersion: 1,\n  frameRate: 10,\n  buttonFrameLength: 5,\n  buttonFrameOffset: 2,\n  frameStops: {\n  },\n}; </script> \n 接著把隨身碟裡的 HTML檔拉到gogle ， 到自己影片 點右鍵再按檢視網頁原始碼 。 \n \n 把 下圖框起來的部分複製起來。 \n \n \n 接著 按save ， 按generate_pages 。 \n 到小黑框打 \n acp "xxx"  (xxx隨便輸入甚麼都可) \n 推完之後回去github， 找downloads資料夾 。 \n \n 進入downloads資料夾 後， 點選Add File ， 按Upload files 。 \n \n 按choose your files \n \n 選做好的wink影片(mp4檔) \n \n 檔案跑完之後， 按Commit changes 。 \n \n 到小黑框打 \n git pull \n \n 完成後就可以去倉儲檢查影片有無推成功。 \n', 'tags': '', 'url': 'Wink影片上傳.html'}, {'title': 'Leo', 'text': '在小黑窗打 \n cd cd2022 \n leo \n \n 進到leo，接著點選 File裡面的Open-Outline \n \n 接著開啟 cd2022的config裡面的pelican \n \n 修改裡面原有的資料，改成 自己的學號和標題 \n \n 這裡網址也都改成自己倉儲 \n \n 修改自己要的標題資訊 \n \n 修改好後對local-blog按下右鍵，在按下Goto Script \n \n 在小黑窗打上 \n cd cd2022\xa0 \n pelican markdown -o blog -s local_publishconf.py \n 第一次打會出現一個錯誤，需要再cd2022的markdown裡面加個images的資料夾就可以解決錯誤。 \n \n', 'tags': '', 'url': 'Leo.html'}, {'title': '使用ShareX', 'text': '使用ShareX \n 開啟程式 \n \n 內部指令: \n 擷取區域Ctrl+Print Screen \n 擷取整個螢幕Print Screen \n 擷取活動視窗Alt+Print Screen \n 開始/停止使用自訂區域錄製螢幕Shift+Print Screen \n', 'tags': '', 'url': '使用ShareX.html'}, {'title': 'Problems', 'text': '', 'tags': '', 'url': 'Problems.html'}, {'title': '地25影片', 'text': '我做完影片都沒有問題，但是當要推上去倉儲時，都會無法成功，我請教了班上一些對這比較有概念的同學，還是無法弄成功，我五個影片都有做出來，但是就是推不上去。 \n \n \n \n \n \n', 'tags': '', 'url': '地25影片.html'}, {'title': 'HW', 'text': '', 'tags': '', 'url': 'HW.html'}, {'title': 'W2', 'text': '六到八人一組，分好之後， 利用 Ethercalc 表單同步輸入 github 帳號與組別時, 將資料存入\xa0 https://github.com/mdecycu/studlist \xa0 倉儲。 \n 經由 Github Pages 設定後, 可由\xa0 https://mde.tw/studlist/2022spring/2a.txt \xa0 讀取甲班的學員帳號及分組資料 \xa0。 \n 總結我是 第六組 \n 這是甲班的分組名單 \n 分組名單 \n 第1組: \n repo: \xa0 40923101 \xa0 www: \xa0 40923101 \xa0 cd2022ag1-repo: \xa0 40923101 \xa0 cd2022ag1-www: \xa0 40923101 repo: \xa0 40923103 \xa0 www: \xa0 40923103 \xa0 cd2022ag1-repo: \xa0 40923103 \xa0 cd2022ag1-www: \xa0 40923103 repo: \xa0 40923108 \xa0 www: \xa0 40923108 \xa0 cd2022ag1-repo: \xa0 40923108 \xa0 cd2022ag1-www: \xa0 40923108 repo: \xa0 40923119 \xa0 www: \xa0 40923119 \xa0 cd2022ag1-repo: \xa0 40923119 \xa0 cd2022ag1-www: \xa0 40923119 repo: \xa0 40923137 \xa0 www: \xa0 40923137 \xa0 cd2022ag1-repo: \xa0 40923137 \xa0 cd2022ag1-www: \xa0 40923137 repo: \xa0 40923154 \xa0 www: \xa0 40923154 \xa0 cd2022ag1-repo: \xa0 40923154 \xa0 cd2022ag1-www: \xa0 40923154 repo: \xa0 40923156 \xa0 www: \xa0 40923156 \xa0 cd2022ag1-repo: \xa0 40923156 \xa0 cd2022ag1-www: \xa0 40923156 repo: \xa0 40971134 \xa0 www: \xa0 40971134 \xa0 cd2022ag1-repo: \xa0 40971134 \xa0 cd2022ag1-www: \xa0 40971134 第2組: repo: \xa0 40923102 \xa0 www: \xa0 40923102 \xa0 cd2022ag2-repo: \xa0 40923102 \xa0 cd2022ag2-www: \xa0 40923102 repo: \xa0 40923104 \xa0 www: \xa0 40923104 \xa0 cd2022ag2-repo: \xa0 40923104 \xa0 cd2022ag2-www: \xa0 40923104 repo: \xa0 40923105 \xa0 www: \xa0 40923105 \xa0 cd2022ag2-repo: \xa0 40923105 \xa0 cd2022ag2-www: \xa0 40923105 repo: \xa0 40923106 \xa0 www: \xa0 40923106 \xa0 cd2022ag2-repo: \xa0 40923106 \xa0 cd2022ag2-www: \xa0 40923106 repo: \xa0 40923107 \xa0 www: \xa0 40923107 \xa0 cd2022ag2-repo: \xa0 40923107 \xa0 cd2022ag2-www: \xa0 40923107 repo: \xa0 40923110 \xa0 www: \xa0 40923110 \xa0 cd2022ag2-repo: \xa0 40923110 \xa0 cd2022ag2-www: \xa0 40923110 repo: \xa0 40923121 \xa0 www: \xa0 40923121 \xa0 cd2022ag2-repo: \xa0 40923121 \xa0 cd2022ag2-www: \xa0 40923121 repo: \xa0 40923153 \xa0 www: \xa0 40923153 \xa0 cd2022ag2-repo: \xa0 40923153 \xa0 cd2022ag2-www: \xa0 40923153 第3組: repo: \xa0 40923129 \xa0 www: \xa0 40923129 \xa0 cd2022ag3-repo: \xa0 40923129 \xa0 cd2022ag3-www: \xa0 40923129 repo: \xa0 40923146 \xa0 www: \xa0 40923146 \xa0 cd2022ag3-repo: \xa0 40923146 \xa0 cd2022ag3-www: \xa0 40923146 repo: \xa0 40923148 \xa0 www: \xa0 40923148 \xa0 cd2022ag3-repo: \xa0 40923148 \xa0 cd2022ag3-www: \xa0 40923148 repo: \xa0 40923109 \xa0 www: \xa0 40923109 \xa0 cd2022ag3-repo: \xa0 40923109 \xa0 cd2022ag3-www: \xa0 40923109 repo: \xa0 40923111 \xa0 www: \xa0 40923111 \xa0 cd2022ag3-repo: \xa0 40923111 \xa0 cd2022ag3-www: \xa0 40923111 repo: \xa0 40923114 \xa0 www: \xa0 40923114 \xa0 cd2022ag3-repo: \xa0 40923114 \xa0 cd2022ag3-www: \xa0 40923114 repo: \xa0 40923115 \xa0 www: \xa0 40923115 \xa0 cd2022ag3-repo: \xa0 40923115 \xa0 cd2022ag3-www: \xa0 40923115 repo: \xa0 40923122 \xa0 www: \xa0 40923122 \xa0 cd2022ag3-repo: \xa0 40923122 \xa0 cd2022ag3-www: \xa0 40923122 第4組: repo: \xa0 40923116 \xa0 www: \xa0 40923116 \xa0 cd2022ag4-repo: \xa0 40923116 \xa0 cd2022ag4-www: \xa0 40923116 repo: \xa0 40923124 \xa0 www: \xa0 40923124 \xa0 cd2022ag4-repo: \xa0 40923124 \xa0 cd2022ag4-www: \xa0 40923124 repo: \xa0 40923125 \xa0 www: \xa0 40923125 \xa0 cd2022ag4-repo: \xa0 40923125 \xa0 cd2022ag4-www: \xa0 40923125 repo: \xa0 40923126 \xa0 www: \xa0 40923126 \xa0 cd2022ag4-repo: \xa0 40923126 \xa0 cd2022ag4-www: \xa0 40923126 repo: \xa0 40923127 \xa0 www: \xa0 40923127 \xa0 cd2022ag4-repo: \xa0 40923127 \xa0 cd2022ag4-www: \xa0 40923127 repo: \xa0 40923128 \xa0 www: \xa0 40923128 \xa0 cd2022ag4-repo: \xa0 40923128 \xa0 cd2022ag4-www: \xa0 40923128 repo: \xa0 40923138 \xa0 www: \xa0 40923138 \xa0 cd2022ag4-repo: \xa0 40923138 \xa0 cd2022ag4-www: \xa0 40923138 repo: \xa0 40923143 \xa0 www: \xa0 40923143 \xa0 cd2022ag4-repo: \xa0 40923143 \xa0 cd2022ag4-www: \xa0 40923143 第5組: repo: \xa0 40923131 \xa0 www: \xa0 40923131 \xa0 cd2022ag5-repo: \xa0 40923131 \xa0 cd2022ag5-www: \xa0 40923131 repo: \xa0 40923133 \xa0 www: \xa0 40923133 \xa0 cd2022ag5-repo: \xa0 40923133 \xa0 cd2022ag5-www: \xa0 40923133 repo: \xa0 40923134 \xa0 www: \xa0 40923134 \xa0 cd2022ag5-repo: \xa0 40923134 \xa0 cd2022ag5-www: \xa0 40923134 repo: \xa0 40923135 \xa0 www: \xa0 40923135 \xa0 cd2022ag5-repo: \xa0 40923135 \xa0 cd2022ag5-www: \xa0 40923135 repo: \xa0 40923139 \xa0 www: \xa0 40923139 \xa0 cd2022ag5-repo: \xa0 40923139 \xa0 cd2022ag5-www: \xa0 40923139 repo: \xa0 40923142 \xa0 www: \xa0 40923142 \xa0 cd2022ag5-repo: \xa0 40923142 \xa0 cd2022ag5-www: \xa0 40923142 repo: \xa0 40923151 \xa0 www: \xa0 40923151 \xa0 cd2022ag5-repo: \xa0 40923151 \xa0 cd2022ag5-www: \xa0 40923151 repo: \xa0 40923123 \xa0 www: \xa0 40923123 \xa0 cd2022ag5-repo: \xa0 40923123 \xa0 cd2022ag5-www: \xa0 40923123 第6組 : repo: \xa0 40923113 \xa0 www: \xa0 40923113 \xa0 cd2022ag6-repo: \xa0 40923113 \xa0 cd2022ag6-www: \xa0 40923113 repo: \xa0 40923130 \xa0 www: \xa0 40923130 \xa0 cd2022ag6-repo: \xa0 40923130 \xa0 cd2022ag6-www: \xa0 40923130 repo: \xa0 40923140 \xa0 www: \xa0 40923140 \xa0 cd2022ag6-repo: \xa0 40923140 \xa0 cd2022ag6-www: \xa0 40923140 repo: \xa0 40923144 \xa0 www: \xa0 40923144 \xa0 cd2022ag6-repo: \xa0 40923144 \xa0 cd2022ag6-www: \xa0 40923144 repo: \xa0 40923145 \xa0 www: \xa0 40923145 \xa0 cd2022ag6-repo: \xa0 40923145 \xa0 cd2022ag6-www: \xa0 40923145 repo:\xa0 40923149 \xa0www:\xa0 40923149 \xa0cd2022ag6-repo:\xa0 40923149 \xa0cd2022ag6-www:\xa0 40923149 repo: \xa0 40923150 \xa0 www: \xa0 40923150 \xa0 cd2022ag6-repo: \xa0 40923150 \xa0 cd2022ag6-www: \xa0 40923150 repo: \xa0 40923152 \xa0 www: \xa0 40923152 \xa0 cd2022ag6-repo: \xa0 40923152 \xa0 cd2022ag6-www: \xa0 40923152 第7組: repo: \xa0 40923136 \xa0 www: \xa0 40923136 \xa0 cd2022ag7-repo: \xa0 40923136 \xa0 cd2022ag7-www: \xa0 40923136 repo: \xa0 40923147 \xa0 www: \xa0 40923147 \xa0 cd2022ag7-repo: \xa0 40923147 \xa0 cd2022ag7-www: \xa0 40923147 repo: \xa0 40923157 \xa0 www: \xa0 40923157 \xa0 cd2022ag7-repo: \xa0 40923157 \xa0 cd2022ag7-www: \xa0 40923157 repo: \xa0 40823132 \xa0 www: \xa0 40823132 \xa0 cd2022ag7-repo: \xa0 40823132 \xa0 cd2022ag7-www: \xa0 40823132 repo: \xa0 40823143 \xa0 www: \xa0 40823143 \xa0 cd2022ag7-repo: \xa0 40823143 \xa0 cd2022ag7-www: \xa0 40823143 repo: \xa0 40923117 \xa0 www: \xa0 40923117 \xa0 cd2022ag7-repo: \xa0 40923117 \xa0 cd2022ag7-www: \xa0 40923117 repo: \xa0 40923118 \xa0 www: \xa0 40923118 \xa0 cd2022ag7-repo: \xa0 40923118 \xa0 cd2022ag7-www: \xa0 40923118 repo: \xa0 40923120 \xa0 www: \xa0 40923120 \xa0 cd2022ag7-repo: \xa0 40923120 \xa0 cd2022ag7-www: \xa0 40923120 \n', 'tags': '', 'url': 'W2.html'}, {'title': 'W3', 'text': '利用 NX1980 繪製 uArm 機械手臂的協同設計階段, 其中包括手臂兩側的正齒輪減速機設計, 以及各連桿與組立所需要的其他組件設計等。 \n 老師有給\xa038 個比較接近 NX1980 版本功能的教學影片(https://www.youtube.com/watch?v=GUaa97tALxE&list=PLzEsJue49U_EMMv0eBo8MNJjJOq_WHCrl)，一人分配到約5個影片，我分配到的是25、26、27、28、29。 \n \n 使用Wink來製作影片，完成後將所負責的 Wink 教學影片嵌入個人與大分組的 w3 中。 \n \n 影片25: NX Assembly Modeling - Pattern Component \n NX 裝配體建模 - 模式組件 \n \n \n \n \n \n \n   \n \n \n \n \n \n \n \n \n 影片26:NX Exploded Views 講解爆炸功能 \n \n \n \n \n \n \n   \n \n \n \n \n \n \n \n \n \n 影片27:NX Design Fundamentrals 講解設計基礎 \n \n \n \n \n   \n \n \n \n \n \n \n \n \n 影片28:NX Design Simulation FEM Example 設計仿真FEM例子 \n \n \n \n \n   \n \n \n \n \n \n \n \n \n 影片29:NX Intro to GD and T Lecture \n \n \n \n \n   \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'W3.html'}, {'title': 'W6', 'text': '使用blog來記錄自己每週製作的作業。 \n 在小黑窗打 \n cd cd2022 \n leo \n 進入到leo裡 \n \n 編輯好之後， 對 local-blog按下右鍵，在按下Goto Script。 \n \n 將這段 網址複製下來。 \n \n 回去小黑窗打 \n cd cd2022 \n pelican markdown -o blog -s local_publishconf.py \n \n \n', 'tags': '', 'url': 'W6.html'}, {'title': 'W8', 'text': 'uarm主體零件 \n \n', 'tags': '', 'url': 'W8.html'}, {'title': 'W10', 'text': '請各組員在下列影片中加入註解說明後，分別以 w10_block_ui、w10_nx_integ 與 w10_ssh 作為標題，將說明影片嵌入個人 cd2022 網站頁面 (設為 H2 或 H3) 及 blog 網誌中。 \n', 'tags': '', 'url': 'W10.html'}, {'title': 'w10_ssh', 'text': '創建一個新的SSH \n \n \n \n \n   \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w10_ssh.html'}, {'title': 'w10_nx_integ', 'text': '', 'tags': '', 'url': 'w10_nx_integ.html'}, {'title': 'w10_block_ui', 'text': '', 'tags': '', 'url': 'w10_block_ui.html'}, {'title': 'W11', 'text': '任務1: \n 將上課筆記推上小組網站，將 w8~w10的 協同作業過程所負責的項目內容與心得 上傳到小組網站，要先將 圖片和wink改網址， 將code複製至小白窗存成文字檔， 接著 \n cd tmp \n cd cd2022ag6 \n cms \n 推完之後 acp 就可以了。 \n 任務2: \n 因為每個人使用的繪圖程式不一樣，所以 檔案要轉檔成 STL檔 ， \n 將MTB零件組合檔存成STL導入CoppeliaSam，再將零件分解並連接起來， 存成 CoppeliaSim\xa0XLM的simple format檔。 \n', 'tags': '', 'url': 'W11.html'}, {'title': 'W12', 'text': '', 'tags': '', 'url': 'W12.html'}, {'title': 'Graduate School', 'text': '這裡面是可以看學長姐的心得，方便我去準備研究所。 \n 進入這網址: https://wcm.cycu.org/index ，登入論壇 \n \n 點選 2021研究所推甄記錄心得 \n \n 這邊有學長姊們推甄的學校，也有心得。 \n \n \n 要考研究所有兩種選擇 \n 1. 推甄 : 在校成績很重要 。 \n 2. 考試 :假使你的在校成績不是很好，但是還可以用考試，來考取研究所，要 認真準備 才會有好成果。 \n', 'tags': '', 'url': 'Graduate School.html'}, {'title': 'W13', 'text': '登入onedrive後, 觀看課程教學影片:\xa0 cd2022_w13_2a_part1.mp4 \xa0 \n', 'tags': '', 'url': 'W13.html'}, {'title': 'W14', 'text': '', 'tags': '', 'url': 'W14.html'}, {'title': 'W15', 'text': '上課影片: cd2022_w15_2a_part1.mp4 \n 今天上課的重點 \n \n \n \n \n \n \n   \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'W15.html'}, {'title': 'ag6', 'text': '', 'tags': '', 'url': 'ag6.html'}, {'title': '遠距教學', 'text': '今天將測試是否使用 Microsoft Teams 上課, 而不是採用 Google Meet。先申請 onedirve 帳號 \n \n 進入 teams ，利用 team code: bp9x4jy 進入 general channel。 \n \n', 'tags': '', 'url': '遠距教學.html'}, {'title': 'Downloads', 'text': '', 'tags': '', 'url': 'Downloads.html'}, {'title': 'IPV6', 'text': '綜合第一工程館八樓電腦輔助設計室 Windows 10 網路設定:\xa0 https://github.com/mdecourse/wcm2022/discussions/2 \xa0 (使用純 IPv6 網路設定說明) \n \n', 'tags': '', 'url': 'IPV6.html'}, {'title': 'NX', 'text': '下載NX軟體 \n \n \n', 'tags': '', 'url': 'NX.html'}, {'title': 'Wink', 'text': '下載 Wink 3.0 版 \n 下載網址: https://www.debugmode.com/wink/ \n \n Wink3.0 是一套免費的 電腦操作流程影片錄製軟體 ， 與 ShareX 相同的是，兩套軟體的影片製作核心都是採用 ffmpeg.exe. 不同的地方在於:Wink3.0 沒有開源，可能是採用 C++ 編寫，且 Wink3.0 可以在主影格中加入文字說明，以及 html 按鈕。比較適合用來製作需要較多文字說明輔助的教學影片。 \n \n', 'tags': '', 'url': 'Wink.html'}, {'title': 'ShareX', 'text': '下載網址: https://getsharex.com/downloads/ \n \n ShareX 是一套採用 C# 編寫的開源套件， 適合製作加上搭配語音或說明字幕的操作教學影片。 \n \n \n \n \n', 'tags': '', 'url': 'ShareX.html'}]};