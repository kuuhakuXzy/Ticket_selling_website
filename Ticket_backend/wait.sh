#!/bin/bash
# wait.sh

# Wait for 5 seconds
echo "Waiting for 5 seconds..."
sleep 5

# Execute the command passed as arguments
exec "$@"