#!/bin/bash

set -e

export BUILD_ENV='local'
export NODE_ENV='development'

tsnd -r tsconfig-paths/register --no-notify --respawn --transpile-only ./src/server.ts