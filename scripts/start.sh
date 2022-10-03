#!/bin/bash

set -e

export NODE_ENV='production'

tsnd --transpile-only -r tsconfig-paths/register ./build/src/server.js