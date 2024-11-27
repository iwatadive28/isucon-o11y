#!/bin/bash

# .envファイルを読み込む
source .env

# ホスト名のカウントを初期化
COUNT=1

for IP in "${IP_LIST[@]}"; do
  # ホスト名を設定
  HOSTNAME="${HOST_PREFIX}${COUNT}"

  echo "Setting up SSH keys for ${HOSTNAME} (${IP})..."

  # 公開鍵リストをスペース区切りで一行にする
  PUBLIC_KEYS=$(IFS=" "; echo "${PUBLIC_KEY_LIST[*]}")

  # SSHで接続し、公開鍵を~/.ssh/authorized_keysに追加
  ssh -o StrictHostKeyChecking=no -i "$SSH_KEY_PATH" "${SSH_USER}"@$IP \
  "export PUBLIC_KEYS='$PUBLIC_KEYS'; \
  mkdir -p ~/.ssh; \
  for PUBLIC_KEY in \$PUBLIC_KEYS; do \
    echo \$PUBLIC_KEY >> ~/.ssh/authorized_keys; \
  done; \
  chmod 700 ~/.ssh; \
  chmod 600 ~/.ssh/authorized_keys; \
  sudo systemctl restart sshd"

  # カウントをインクリメント
  COUNT=$((COUNT+1))
done

echo "SSH keys setup completed for all servers."
