#!/bin/bash

# .envファイルを読み込む
source .env


# ホスト名のカウントを初期化
COUNT=1

for IP in "${IP_LIST[@]}"; do
  # ホスト名を設定
  HOSTNAME="${HOST_PREFIX}${COUNT}"
  
  echo "Setting up SSH keys for ${HOSTNAME} (${IP})..."

  # SSHで接続し、GitHubユーザーの公開鍵を~/.ssh/authorized_keysに追加
  ssh -o StrictHostKeyChecking=no -i "$SSH_KEY_PATH" "${SSH_USER}"@$IP << EOF
    # .sshディレクトリを作成（存在しない場合）
    mkdir -p ~/.ssh

    # GitHubユーザー名から公開鍵を取得し、authorized_keysに追加
    for USERNAME in "${GITHUB_USERNAMES[@]}"; do
      PUBLIC_KEY=\$(curl -s https://github.com/\$USERNAME.keys)
      echo "\$PUBLIC_KEY"
      echo "\$PUBLIC_KEY" >> ~/.ssh/authorized_keys
    done

    # 権限を適切に設定
    chmod 700 ~/.ssh
    chmod 600 ~/.ssh/authorized_keys

    # SSHサービスを再起動して反映
    sudo systemctl restart sshd
EOF

  # カウントをインクリメント
  COUNT=$((COUNT+1))
done

echo "SSH keys setup completed for all servers."
