default: init-build-environment lint build

# setup the build environment
init-build-environment:
    pnpm install

# format and lint the project
lint:
    pnpm lint
    pnpm install

# compile the current package
build:
    pnpm build

# clean the build
clean mode="":
    pnpm clean

    if test "{{mode}}" = "complete"; then \
      rm ./pnpm-lock.yaml; \
    fi
