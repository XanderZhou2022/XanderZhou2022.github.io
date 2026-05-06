---
layout: page
title: LLM Fine-Tuning and RAG Course Chatbot
permalink: /projects/cs639-llm-rag/
description: CS639 project on quantized LLM inference, LoRA fine-tuning, and RAG with Elasticsearch and Streamlit.
nav: false
---

## LLM Fine-Tuning and RAG Course Chatbot

<img src="/assets/img/projects/cs639-llm-rag.png" alt="LLM RAG pipeline flow chart" class="img-fluid rounded z-depth-1 mb-4">

This CS639 project explored practical LLM workflows for course-assistant applications. It compared pre-trained inference, LoRA fine-tuning on lecture transcripts, and retrieval-augmented generation for exam preparation.

### What It Does

- Runs 4-bit quantized Llama-3.2-1B-Instruct inference with HuggingFace Transformers.
- Fine-tunes the model on course lecture transcripts using LoRA.
- Loads course transcripts into Elasticsearch.
- Builds a Streamlit RAG chatbot using Haystack and HuggingFace generation, displaying retrieved transcript evidence for transparency.

### Tech Stack

HuggingFace Transformers, bitsandbytes, PEFT/LoRA, Elasticsearch, Haystack, Streamlit, Python.

### Links

[Project Specification](https://github.com/CS639-Data-Management-for-Data-Science/s25/tree/main/p6)

---

[← Back to Projects](/projects/)
