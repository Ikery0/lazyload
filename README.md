# lazyload  
  
HTML  
・scroll.jsとmain.jsをフォルダに入れる  
・lazyloadさせたい<img>にclass="lazy"をつける  
・<img>のsrcに死ぬほど容量が小さい画像を入れる  
・data-srcにはsrcに入れたい画像を入れる  
・data-srcsetにはsecsetに入れたい画像を入れる  

jsの
画面に表示されている範囲より、20px下まできたら画像のパスを入れ替える
