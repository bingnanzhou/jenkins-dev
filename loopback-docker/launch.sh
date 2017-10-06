# Update the env file (s3 path) and then launch the api

#!/bin/sh

# Env file
if [[ ! -z "$Bucket" ]] && [[ ! -z "$Key" ]] ; then
    # Pass env fron Docker environment variables
    echo 'S3_ENV_PARAMS={"Bucket":"'"$Bucket"'", "Key":"'"$Key"'"}' > twc-loopback-blueid-env
else
    # Default env file on S3
    echo 'S3_ENV_PARAMS={"Bucket": "jetstream-loopback-usam", "Key": "env/docker/twc-loopback-blueid-env"}' > twc-loopback-blueid-env
fi

# RDS
if [[ ! -z "$PSQL_HOST" ]]; then
    echo 'PSQL_HOST='"$PSQL_HOST" >> twc-loopback-blueid-env
fi

if [[ ! -z "$PSQL_USER" ]]; then
    echo 'PSQL_USER='"$PSQL_USER" >> twc-loopback-blueid-env
fi

if [[ ! -z "$PSQL_PASS" ]]; then
    echo 'PSQL_PASS='"$PSQL_PASS" >> twc-loopback-blueid-env
fi

# Launch loopback (Node app)
node -r /home/centos/npm/lib/node_modules/twc-loopback-blueid-api/node_modules/s3env /home/centos/npm/lib/node_modules/twc-loopback-blueid-api/server/server.js dotenv_config_path=/twc-loopback-blueid-env