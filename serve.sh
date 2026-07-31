#!/usr/bin/env bash
cd "$(dirname "$0")"
PORT="${1:-8080}"

echo ""
echo "  Axtra Labs website"
echo "  → http://localhost:${PORT}"
echo ""
echo "  Services"
echo "    /                          Homepage"
echo "    /services.html             All services"
echo "    /ai-services.html          01 AI Services"
echo "    /data-bi.html              02 Data & BI"
echo "    /embedded-software.html    03 Embedded Software"
echo "    /ai-robotics.html          04 AI for Robotics"
echo "    /devops.html               05 DevOps"
echo "    /ai-software-development.html  06 AI-Software Development"
echo ""
echo "  Industries"
echo "    /manufacturing.html        Manufacturing"
echo "    /retail.html               Retail & E-commerce"
echo "    /travel.html               Travel & Hospitality"
echo "    /home-services.html        Home Services"
echo ""

# Kill any existing server on this port so relaunch is clean
if command -v lsof >/dev/null 2>&1; then
  PIDS=$(lsof -tiTCP:"$PORT" -sTCP:LISTEN 2>/dev/null || true)
  if [ -n "$PIDS" ]; then
    echo "  Stopping existing process on :$PORT ..."
    kill $PIDS 2>/dev/null || true
    sleep 0.4
  fi
fi

exec python3 -m http.server "$PORT"
