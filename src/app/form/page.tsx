'use client';

import { useState } from 'react';

// 古臭くて無駄の多い実装のフォームページ
export default function OldSchoolFormPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState({ name: '', email: '' });
  const [isLoading, setIsLoading] = useState(false); // ローディング状態管理
  
  // 検索機能（useTransitionを使うべきだが、古臭い実装で行う）
  const [searchQuery, setSearchQuery] = useState(''); // 検索クエリ
  const [searchResults, setSearchResults] = useState([]); // 検索結果
  const [isSearching, setIsSearching] = useState(false); // 検索中フラグ

  // 古臭いインラインハンドラーの書き方
  const handleNameChange = (e: any) => { // any型使用（型安全性なし）
    const value = e.target.value;
    console.log('名前が変更されました: ', value); // 過度なログ出力
    setName(value);
  };

  const handleEmailChange = (e: any) => { // any型使用（型安全性なし）
    const value = e.target.value;
    console.log('メールアドレスが変更されました: ', value); // 過度なログ出力
    setEmail(value);
  };

  // 古臭い検索ハンドラー（useTransitionを使わない非効率な実装）
  const handleSearchChange = (e: any) => { // any型使用
    const query = e.target.value;
    setSearchQuery(query);
    
    // 本来はuseTransitionで非ブロッキングにすべきだが、古臭い実装
    setIsSearching(true); // UI全体をブロックする可能性
    
    // 重い検索処理のシミュレーション（同期的に実行してUIをブロック）
    const fakeResults = []; // 古臭い配列作成
    for (let i = 0; i < 1000; i++) { // 重い処理をメインスレッドで実行
      if (query && `結果${i}`.includes(query)) {
        fakeResults.push(`検索結果: ${query} - アイテム${i}`);
      }
    }
    
    // 人工的な遅延でUIをブロック
    setTimeout(() => { // 古臭いsetTimeout使用
      setSearchResults(fakeResults.slice(0, 5)); // 上位5件のみ表示
      setIsSearching(false);
    }, 300); // 300ms遅延でUI反応が悪い
  };

  // 冗長なsubmitハンドラー
  const handleSubmit = (e: any) => { // any型使用（型安全性なし）
    e.preventDefault();
    
    console.log('フォームが送信されました');
    console.log('名前: ', name);
    console.log('メールアドレス: ', email);
    
    // 無駄に複雑な処理
    const nameValue = name; // 不要な変数代入
    const emailValue = email; // 不要な変数代入
    
    if (nameValue && emailValue) {
      setIsLoading(true); // ローディング開始
      
      // 送信処理をシミュレート（2秒待機）
      setTimeout(() => { // 古臭いsetTimeout使用
        setSubmittedData({
          name: nameValue,
          email: emailValue
        });
        setSubmitted(true);
        setIsLoading(false); // ローディング終了
        alert('送信が完了しました！'); // 古いalert API使用
      }, 2000);
    } else {
      alert('名前とメールアドレスを入力してください。'); // 古いalert API使用
    }
  };

  // リセット機能（無駄に複雑）
  const handleReset = () => {
    console.log('フォームをリセットします');
    setName('');
    setEmail('');
    setSubmitted(false);
    setSubmittedData({ name: '', email: '' });
    console.log('リセットが完了しました');
  };

  return (
    <div style={{ // インラインスタイル（CSSクラスを使わない古い手法）
      minHeight: '100vh', 
      padding: '20px', 
      backgroundColor: '#f5f5f5',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ // インラインスタイル（メンテナンス性が悪い）
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ 
          fontSize: '24px', 
          marginBottom: '20px',
          color: '#333',
          textAlign: 'center'
        }}>
          お問い合わせフォーム
        </h1>
        
        <p style={{ 
          marginBottom: '30px', 
          color: '#666',
          textAlign: 'center'
        }}>
          名前とメールアドレスを入力して送信してください。
        </p>

        {/* 検索機能カード（useTransitionを使うべきUI） */}
        <div style={{
          backgroundColor: 'white',
          padding: '25px',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          marginBottom: '25px',
          border: '2px solid #ff6b6b' // 赤い境界で問題のあるUIを強調
        }}>
          <h3 style={{
            margin: '0 0 20px 0',
            color: '#ff6b6b',
            fontSize: '18px'
          }}>
            🔍 ユーザー検索（古臭い実装 - useTransition未使用）
          </h3>
          
          <label style={{ 
            display: 'block', 
            marginBottom: '8px',
            fontWeight: 'bold',
            color: '#333'
          }}>
            検索キーワード
          </label>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange} // 古臭い実装：useTransitionを使わない
            style={{
              width: '100%',
              padding: '12px',
              border: '2px solid #ddd',
              borderRadius: '6px',
              fontSize: '16px',
              backgroundColor: isSearching ? '#f5f5f5' : 'white', // 検索中は灰色
              opacity: isSearching ? 0.7 : 1
            }}
            placeholder="検索キーワードを入力..."
            disabled={isSearching} // 検索中は入力不可（悪いUX）
          />
          
          {isSearching && ( // 古臭いローディング表示
            <div style={{ 
              marginTop: '12px', 
              color: '#ff6b6b',
              fontStyle: 'italic',
              fontWeight: 'bold'
            }}>
              🔄 検索中です...（UIがブロックされています）
            </div>
          )}
          
          {searchResults.length > 0 && !isSearching && (
            <div style={{
              marginTop: '15px',
              border: '1px solid #ddd',
              borderRadius: '6px',
              backgroundColor: '#f9f9f9',
              maxHeight: '200px',
              overflowY: 'auto'
            }}>
              <div style={{
                padding: '8px 12px',
                backgroundColor: '#e3f2fd',
                fontWeight: 'bold',
                borderBottom: '1px solid #ddd'
              }}>
                検索結果 ({searchResults.length}件)
              </div>
              {searchResults.map((result, index) => ( // key={index}は非推奨
                <div
                  key={index} // 古臭いkey使用（indexは非推奨）
                  style={{
                    padding: '10px 12px',
                    borderBottom: index < searchResults.length - 1 ? '1px solid #eee' : 'none',
                    cursor: 'pointer'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#f0f0f0'}
                  onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                  {result}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* フォームカード（独立したUI） */}
        <div style={{
          backgroundColor: 'white',
          padding: '25px',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          border: '2px solid #4caf50' // 緑の境界で正常なUIを表現
        }}>
          <h3 style={{
            margin: '0 0 20px 0',
            color: '#4caf50',
            fontSize: '18px'
          }}>
            📝 お問い合わせフォーム（独立したUI）
          </h3>
          
          <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '5px',
              fontWeight: 'bold'
            }}>
              お名前 *
            </label>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '16px'
              }}
              placeholder="山田太郎"
            />
          </div>

          <div style={{ marginBottom: '30px' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '5px',
              fontWeight: 'bold'
            }}>
              メールアドレス *
            </label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '16px'
              }}
              placeholder="example@example.com"
            />
          </div>

          <div style={{ 
            display: 'flex', 
            gap: '10px',
            justifyContent: 'center' 
          }}>
            <button 
              type="submit"
              disabled={isLoading} // ローディング中はボタン無効化
              style={{
                backgroundColor: isLoading ? '#6c757d' : '#007bff', // ローディング中は灰色
                color: 'white',
                padding: '12px 24px',
                border: 'none',
                borderRadius: '4px',
                fontSize: '16px',
                cursor: isLoading ? 'not-allowed' : 'pointer' // カーソル変更
              }}
            >
              {isLoading ? '送信中...' : '送信する'} {/* ローディング時テキスト変更 */}
            </button>
            
            <button 
              type="button"
              onClick={handleReset}
              style={{
                backgroundColor: '#6c757d',
                color: 'white',
                padding: '12px 24px',
                border: 'none',
                borderRadius: '4px',
                fontSize: '16px',
                cursor: 'pointer'
              }}
            >
              リセット
            </button>
          </div>
          </form>
        </div>

        {submitted && (
          <div style={{
            marginTop: '30px',
            padding: '20px',
            backgroundColor: '#d4edda',
            border: '1px solid #c3e6cb',
            borderRadius: '4px',
            color: '#155724'
          }}>
            <h3 style={{ marginBottom: '10px' }}>送信内容</h3>
            <p><strong>お名前:</strong> {submittedData.name}</p>
            <p><strong>メールアドレス:</strong> {submittedData.email}</p>
          </div>
        )}

        {/* Browser Tools デモカード */}
        <div style={{
          backgroundColor: 'white',
          padding: '25px',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          marginTop: '25px',
          border: '2px solid #2196F3' // 青い境界でbrowser-toolsを表現
        }}>
          <h3 style={{
            margin: '0 0 20px 0',
            color: '#2196F3',
            fontSize: '18px'
          }}>
            🌐 Browser Tools MCPサーバーデモ
          </h3>
          
          <p style={{ 
            marginBottom: '20px', 
            color: '#666',
            lineHeight: '1.6'
          }}>
            このページでbrowser-toolsの機能をテストできます。Chrome拡張機能と連携して、
            スクリーンショット取得、コンソールログ、ネットワークログ、パフォーマンス監査などが可能です。
          </p>

          {/* 意図的にアクセシビリティ問題のある要素 */}
          <div style={{ marginBottom: '20px' }}>
            <button 
              style={{
                backgroundColor: '#ff9800',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '4px',
                marginRight: '10px',
                fontSize: '14px'
              }}
              onClick={() => {
                // コンソールにエラーを出力（browser-toolsでキャッチ可能）
                console.error('意図的なエラーログ: browser-toolsデモ用');
                console.warn('警告ログ: パフォーマンステスト用');
                console.log('通常ログ: ボタンがクリックされました');
              }}
            >
              コンソールログ出力
            </button>

            <button 
              style={{
                backgroundColor: '#9c27b0',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '4px',
                marginRight: '10px',
                fontSize: '14px'
              }}
              onClick={() => {
                // 存在しないAPIを呼び出してネットワークエラーを発生
                fetch('/api/nonexistent-endpoint')
                  .then(response => response.json())
                  .catch(error => {
                    console.error('ネットワークエラー:', error);
                  });
              }}
            >
              ネットワークエラー発生
            </button>

            <div 
              style={{
                backgroundColor: '#f44336',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '4px',
                display: 'inline-block',
                marginRight: '10px',
                fontSize: '12px', // 小さすぎるフォント（アクセシビリティ問題）
                cursor: 'pointer'
              }}
              onClick={() => alert('アクセシビリティ問題のあるボタン')}
            >
              小さすぎるボタン
            </div>
          </div>

          {/* パフォーマンステスト用の重い処理 */}
          <div style={{ marginBottom: '20px' }}>
            <button 
              style={{
                backgroundColor: '#795548',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '4px',
                fontSize: '14px'
              }}
              onClick={() => {
                // 重い処理でメインスレッドをブロック
                const start = Date.now();
                while (Date.now() - start < 2000) {
                  // 2秒間ブロック
                }
                console.log('重い処理完了: browser-toolsでパフォーマンス測定可能');
              }}
            >
              重い処理実行（2秒ブロック）
            </button>
          </div>

          {/* ダミーの画像（404エラー発生） */}
          <div style={{ marginBottom: '20px' }}>
            <img 
              src="/nonexistent-image.jpg" 
              alt="存在しない画像"
              style={{
                width: '100px',
                height: '100px',
                backgroundColor: '#f0f0f0',
                border: '1px dashed #ccc'
              }}
              onError={(e) => {
                console.error('画像読み込みエラー: browser-toolsでネットワークエラーを確認可能');
              }}
            />
            <p style={{ fontSize: '12px', color: '#666' }}>
              ↑存在しない画像（404エラー発生）
            </p>
          </div>

          <div style={{
            backgroundColor: '#e3f2fd',
            padding: '15px',
            borderRadius: '4px',
            border: '1px solid #90caf9'
          }}>
            <h4 style={{ margin: '0 0 10px 0', color: '#1565c0' }}>
              Browser Tools で確認できる内容:
            </h4>
            <ul style={{ margin: '0', paddingLeft: '20px', color: '#333' }}>
              <li>📸 <strong>スクリーンショット</strong>: 現在のページ状態</li>
              <li>📋 <strong>コンソールログ</strong>: エラー、警告、通常ログ</li>
              <li>🌐 <strong>ネットワークログ</strong>: 失敗したAPIリクエスト、404エラー</li>
              <li>⚡ <strong>パフォーマンス監査</strong>: 重い処理の検出</li>
              <li>♿ <strong>アクセシビリティ監査</strong>: 小さすぎるボタンなどの問題</li>
              <li>🔍 <strong>SEO監査</strong>: メタタグ、構造化データ等</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}