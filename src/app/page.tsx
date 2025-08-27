import React from "react";
import Link from "next/link";
import { Presentation } from "@/components/presentation";
import "@/styles/presentation.css";

export default function Home() {
  return (
    <Presentation>
      {/* Slide 1: Title */}
      <div className="title-slide">
        <h1>業務で使っている<br />MCPサーバー活用術</h1>
      </div>

      {/* Slide 2: Audience */}
      <div>
        <h2>📋 このセッションの対象者</h2>
        <div className="content-grid">
          <div className="card">
            <h3><span className="emoji">👨‍💻</span> 開発者・エンジニア</h3>
            <p>日々のコーディング作業を効率化したい方。MCPに興味があるが使ったことがない方も歓迎！</p>
          </div>
          <div className="card">
            <h3><span className="emoji">🔰</span> MCP初心者</h3>
            <p>「MCPって何？」「聞いたことはあるけど...」という方向け。基礎から丁寧に説明します。</p>
          </div>
          <div className="card">
            <h3><span className="emoji">⚡</span> 効率化したい方</h3>
            <p>繰り返し作業にうんざり、開発スピードを上げたい、新しいツールを試してみたい方。</p>
          </div>
        </div>
      </div>

      {/* Slide 3: What is MCP */}
      <div>
        <h2>🤖 MCPサーバーとは？</h2>
        <div className="content-grid">
          <div className="card">
            <h3><span className="emoji">🔗</span> Model Context Protocol</h3>
            <p>AIモデルと外部システムを連携させる標準プロトコル。Claude等のAIに新しい機能を追加できます。</p>
          </div>
          <div className="card">
            <h3><span className="emoji">🛠️</span> 機能拡張</h3>
            <p>ファイル操作、API呼び出し、データベース接続など、AIができることを大幅に拡張します。</p>
          </div>
          <div className="card">
            <h3><span className="emoji">🔄</span> リアルタイム連携</h3>
            <p>チャット中にリアルタイムで外部システムとやり取り。情報取得や操作が瞬時に行われます。</p>
          </div>
        </div>
      </div>

      {/* Slide 4: Summary line */}
      <div>
        <h2>要するに、AIができることが増えます</h2>
      </div>

      {/* Slide 5: Servers list */}
      <div className="problem-slide">
        <h2>🗂️ 紹介するMCPサーバー</h2>
        <div className="content-grid">
          <div className="card">
            <h3><span className="emoji">🧑‍🔬</span> serena</h3>
            <p>コードベースを深く解析し、シンボル検索や編集を高速化。リファクタリングやドキュメント生成をAIが強力にサポートします。</p>
          </div>
          <div className="card">
            <h3><span className="emoji">📚</span> context7</h3>
            <p>最新かつバージョン特定の公式ドキュメントやコード例を「その場で取得」してLLMに注入。旧データ由来の誤りやハルシネーションを回避し、正確な実装支援を行います（resolve-library-id / get-library-docs）。</p>
          </div>
          <div className="card">
            <h3><span className="emoji">🌐</span> browser_tools</h3>
            <p>Chrome拡張＋Nodeサーバー＋MCPの連携で、スクリーンショット・コンソール/ネットワークログ取得やLighthouseベースのSEO/性能/アクセシビリティ監査を実行。ブラウザ計測結果をそのままAIに渡せます。</p>
          </div>
        </div>
      </div>

      {/* Slide 6: Demo intro */}
      <div className="demo-slide">
        <h2>🎬 実際の使用例デモ</h2>
        <div className="demo-container">
          <Link href="/form" className="demo-link">
            📝 フォームデモを見る
          </Link>
          <p className="demo-description">
            MCPサーバーを使った実際のフォーム実装例をご覧いただけます
          </p>
        </div>
      </div>

      {/* Slide 7: Closing */}
      <div className="title-slide">
        <h1>🌟 MCPサーバーで<br />開発効率を向上！</h1>
        <div className="subtitle">今すぐ始めて、<br />開発の未来を体験しよう</div>
        <div className="author">ご質問・ご相談はお気軽に 🙋‍♂️</div>
      </div>
    </Presentation>
  );
}
