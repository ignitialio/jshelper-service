#!/bin/sh

# ------------------------------------------------------------------------------
# Generate app configuration
# ------------------------------------------------------------------------------
iio config -i k8s/config -o k8s/kustomizations/config app generate

# ------------------------------------------------------------------------------
# Kustomize
# ------------------------------------------------------------------------------
kubectl --kubeconfig ${IIOS_K8S_KUBECONFIG_PATH} apply -k k8s/kustomizations

# ------------------------------------------------------------------------------
# Generate deploy configuration
# ------------------------------------------------------------------------------
iio config deploy generate

# ------------------------------------------------------------------------------
# Deploy
# ------------------------------------------------------------------------------
kubectl --kubeconfig ${IIOS_K8S_KUBECONFIG_PATH} apply -f k8s/deploy